import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
    return (
        <main className='h-full w-full flex flex-col gap-5 items-center justify-center'>
            <div className='shadow-lg p-8 flex flex-col gap-8 w-full max-w-[400px]'>
                <h1 className='font-medium text-3xl'>Sign in</h1>
                <div className='flex flex-col gap-5'>
                    <input
                        className='border border-gray-500 px-4 py-3 rounded-md text-lg'
                        placeholder='Email'
                        type="email" name="email" id="email" />
                    <input
                        className='border border-gray-500 px-4 py-3 rounded-md text-lg'
                        placeholder='Password'
                        type="password" name="password" id="password" />

                </div>
                <button className='bg-primary rounded-full text-white py-3'>Sign in</button>
            </div>
            <h1 className='flex gap-2'>
                New to vMeme?
                <Link href={'/auth/signup'} className='text-blue-400 underline'>
                    Join now
                </Link>
            </h1>
        </main>
    )
}
