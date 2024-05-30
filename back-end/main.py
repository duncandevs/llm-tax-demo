from fastapi import FastAPI, File, UploadFile, HTTPException
from models import W2FormModel
from instructor_client import client
import fitz  # PyMuPDF
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3001",  # Add your frontend URL here
    "http://localhost:3000",  # Add your frontend URL here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_openai_response(text):
    result = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=[{
            "role": "user",
            "content": f"Return the information from this doc: {text}"
        }],
        response_model=W2FormModel
    )
    return result

def extract_text_from_pdf(file_path):
    text = ""
    try:
        pdf_document = fitz.open(file_path)
        for page_num in range(pdf_document.page_count):
            page = pdf_document.load_page(page_num)
            text += page.get_text()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {e}")
    return text

@app.post("/api/v1/documents/w2/upload")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")
    
    # Save the uploaded PDF to a temporary location
    temp_file_location = f"/tmp/{file.filename}"
    with open(temp_file_location, "wb") as f:
        f.write(await file.read())

    # Convert PDF to text
    try:
        extracted_text = extract_text_from_pdf(temp_file_location)
    except ValueError as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    result = get_openai_response(extracted_text)
    return {"data": result}