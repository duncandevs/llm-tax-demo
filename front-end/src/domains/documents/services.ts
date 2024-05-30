import { uploadW2DocumentQuery } from "./api";
import { W2FormSchema } from "./types";

type UploadW2DocumentProps = {
    formData: FormData
};
export const uploadW2Document = async ({ formData }: UploadW2DocumentProps) => {
    try {
        const results = await uploadW2DocumentQuery({ formData });
        
        // Ensures that the data returned always matches the expected data model
        const validatedData = W2FormSchema.safeParse(results.data.data);

        if(validatedData.error) console.log(validatedData.error.errors)
        if(!validatedData.success) throw Error(validatedData.error.message);
        
        return validatedData.data;
    } catch (error: unknown) {
        throw Error("Oops something went wrong. please make sure the document uploaded is a valid w2")
    };
};