'use client'
import { useFormState, useFormStatus } from "react-dom"
import { signup } from "./action"
import AuthInputBox from "./authInputBox"

export interface IState {
    [key: string]: string | any,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    password?: string | null,
    confirmPassword?: string | null
}

const initialState: IState = {}


export default function SignUpForm() {
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(signup, initialState)
    return (
        <form action={formAction} className='shadow-lg p-8 flex flex-col gap-8 w-full max-w-[400px]'>
            <h1 className='font-medium text-3xl'>Sign up</h1>
            <div className='flex flex-col gap-5'>
                <AuthInputBox
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    errorMessage={state.email}
                />

                <AuthInputBox
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    errorMessage={state.firstName}
                />

                <AuthInputBox
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    errorMessage={state.lastName}
                />

                <AuthInputBox
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    errorMessage={state.password}
                />

                <AuthInputBox
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    errorMessage={state.confirmPassword}
                />
            </div>
            <button
                type="submit"
                className='bg-primary rounded-full text-white py-3'>Sign up</button>
        </form>
    )
}
