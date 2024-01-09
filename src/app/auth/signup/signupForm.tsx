'use client'
import { useFormState, useFormStatus } from "react-dom"
import { signup } from "./action"
import AuthInputBox from "../authInputBox"
import { redirect } from "next/navigation"
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react"
export interface IState {
    [key: string]: string | any,
    success: boolean
    callBackUrl?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    password?: string | null,
    confirmPassword?: string | null
}

const initialState: IState = {
    success: false
}


export default function SignUpForm() {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(signup, initialState)
    const [isVerified, setIsVerified] = useState<boolean>(false)
    if (state?.success) redirect('/auth/otp')
    return (
        <form action={formAction} className='shadow-lg p-8 flex flex-col gap-8 w-full max-w-[400px]'>
            <h1 className='font-medium text-3xl'>Sign up</h1>
            <div className='flex flex-col gap-5'>
                <AuthInputBox
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    errorMessage={state?.email}
                />

                <AuthInputBox
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    errorMessage={state?.firstName}
                />

                <AuthInputBox
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    errorMessage={state?.lastName}
                />

                <AuthInputBox
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    errorMessage={state?.password}
                />

                <AuthInputBox
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    errorMessage={state?.confirmPassword}
                />
                <div className="flex justify-center">
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ''}
                        onChange={(e) => setIsVerified(true)}
                    />
                </div>
                <button
                    disabled={!isVerified}
                    type="submit"
                    className='bg-primary rounded-full text-white py-3 disabled:bg-black disabled:bg-opacity-10'>{!pending ? 'Sign up' : 'Loading'}</button>
            </div>

        </form>
    )
}
