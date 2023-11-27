
import Link from "next/link"
import SignUpForm from "./signupForm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"


export default async function SignUpPage() {
    const session = await getServerSession(authOptions)
    if(session) redirect('/')
    return (
        <main className='h-full w-full flex flex-col gap-5 items-center justify-center'>
            <SignUpForm />
            <h1 className='flex gap-2'>
                Already on vMeme?
                <Link href={'/auth/signin'} className='text-blue-400 underline'>
                    Join now
                </Link>
            </h1>
        </main>
    )
}
