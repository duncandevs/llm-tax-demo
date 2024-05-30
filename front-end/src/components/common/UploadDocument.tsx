"use client"
import React, { useRef, useState } from 'react';
import { z } from 'zod';
import { Upload as UploadIcon } from 'lucide-react';
import { Button } from "@/src/components/ui/button";
import { AlertError } from './AlertError';
import { uploadW2Document } from '@/src/domains/documents/services';
import { W2Form } from '@/src/domains/documents/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";


const PdfFileUploadSchema = z.object({
  type: z.string().refine((val) => val === 'application/pdf', {
    message: 'Only PDF files are allowed',
  }),
});

const UploadDocument = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [documentData, setDocumentData] = useState<W2Form | null>(null)

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    try {
      PdfFileUploadSchema.parse({ type: selectedFile.type });
      setFile(selectedFile);
      setError('');
    } catch (e) {
      setFile(null);
      setError(e.errors[0].message);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setError('');
    setIsLoading(true);

    uploadW2Document({ formData })
      .then((res)=>{
        setDocumentData(res)
        setIsLoading(false)
      })
      .catch(()=>{
        setIsLoading(false);
        setError("Oops something went wrong. please make sure the document uploaded is a valid w2");
        setFile(null)
      });
  };

  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  if(documentData) {
    return <div className='flex flex-col items-center'>
        <p>Document Uploaded Successfully</p>
        <div className='min-w-[300px] mt-10 mb-20'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>View W2 Document</AccordionTrigger>
              <AccordionContent>
                <pre className="mt-2 w-[800px] rounded-md bg-slate-950 p-4">
                  <code className="text-white">{JSON.stringify({
                    ...documentData
                  }, null, 2)}</code>
                </pre>  
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </div>
  }

  return (
    <div className='flex flex-col items-center'>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {!file && <Button className="w-[150px] mt-4 space-x-6" onClick={handleButtonClick}>
        <UploadIcon />
        <p>Upload w2</p>
      </Button>}
      <AlertError isShown={!!error} description={error} className='mt-10'/>
      {file && <p className='mt-4'>{file?.name}</p>}
      {file && <Button className="w-[150px] mt-4 space-x-6 bg-[#26c281] hover:bg-[#16a085]" onClick={handleUpload}>
        <UploadIcon />
        <p>Continue</p>
      </Button>}
      {isLoading && <p>uploading...</p>}
    </div>
  );
};

export default UploadDocument;