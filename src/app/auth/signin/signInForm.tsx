'use client'
import { useFormState, useFormStatus } from "react-dom"
import { signIn } from "./action"
import AuthInputBox from "../authInputBox"
import { redirect } from "next/navigation"

export interface IState {
    [key: string]: string | any,
    success?: boolean,
    message?: string | null,
    email?: string | null,
    password?: string | null
}

const initialState: IState = {}

export default function SignInForm() {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(signIn, initialState)
    if (state.success) redirect('/auth/otp')
    
    return (
        <form action={formAction}>
            <div className='flex flex-col gap-5'>

                <AuthInputBox
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    errorMessage={state?.email}
                />

                <AuthInputBox
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    errorMessage={state?.password}
                />

                <button
                    disabled={pending}
                    type="submit"
                    className='bg-primary rounded-full text-white py-3 w-full mt-3'>Sign in</button>
            </div>
        </form>
    )
}
