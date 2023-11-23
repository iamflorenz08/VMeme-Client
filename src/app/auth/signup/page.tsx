
import Link from "next/link"
import SignUpForm from "./signupForm"


export default function SignUpPage() {
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
