import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/src/components/ui/avatar";
import UploadDocument from "@/src/components/common/UploadDocument";

export default function Page () {
    return <main>
        <section className='h-[64px] w-full flex items-center p-4 pl-10  pr-10 justify-between'>
            <p className='text-2xl'>Muse Tax Demo</p>
            <div className='flex items-center space-x-4'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Duncan Maina</p>
            </div>
        </section>
        <hr className='w-full'></hr>
        <section className="flex flex-row h-screen">
            <div className="flex pt-[15%] w-full justify-center">
                <div className="flex flex-col items-center">
                    <p className="text-2xl">Upload your tax document</p>
                    <p className="text-muted-foreground">to get started upload your w2 tax document</p>
                    <UploadDocument />
                </div>
            </div>
        </section>
    </main>
};