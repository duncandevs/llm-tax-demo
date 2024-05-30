import os
from dotenv import load_dotenv
import instructor
from fastapi import FastAPI
from openai import OpenAI
from pydantic import BaseModel
from typing import Iterable, Literal, Any, Union

# Load environment variables from .env file
load_dotenv()


open_ai_key = os.getenv('OPEN_AI_KEY')

# Define the Open AI Client
openAiClient = OpenAI(
    api_key=open_ai_key #Open AI Key
)

# Patch the client with Instructor
client = instructor.patch(openAiClient)

# NOTES
## We can replace the openAIClient with LiteLLM and basically patch any LLM service