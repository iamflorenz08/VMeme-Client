import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/utils/authOption'
import SignInForm from './signInForm'

export default async function SignInPage() {
    const session = await getServerSession(authOptions)
    if (session) redirect('/')

    return (
        <main className='h-full w-full flex flex-col gap-5 items-center justify-center'>
            <div className='shadow-lg p-8 flex flex-col gap-8 w-full max-w-[400px]'>
                <h1 className='font-medium text-3xl'>Sign in</h1>
                <SignInForm />
            </div>
            <h1 className='flex gap-2'>
                New to vMeme?
                <Link href={'/auth/signup'} className='text-blue-400 underline'>
                    Join now
                </Link>
            </h1>
        </main >
    )
}
