import axios from "axios";

// fetch document results
const BASE_URL = 'http://localhost:8000';

type UploadW2DocumentQueryProps = {
    formData: FormData;
};
export const uploadW2DocumentQuery = async ({ formData }: UploadW2DocumentQueryProps) => {
    const url = BASE_URL + '/api/v1/documents/w2/upload';
    const headers = {
        'Content-Type': 'application/pdf'
    };
    const request = {
        method: 'POST',
        url,
        headers,
        data: formData
    };
    return axios(request);   
};