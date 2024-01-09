'use server'
import z from 'zod'
import { IState } from './signupForm'
import { cookies } from 'next/headers'

export async function signup(prevState: any, formData: FormData) {
    const result: IState = {
        success: false,
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    }

    try {
        const UserSchema = z
            .object({
                email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
                firstName: z.string().min(1, { message: "First name is required." }),
                lastName: z.string().min(1, { message: "Last name is required" }),
                password: z.string().regex(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/, { message: 'Must be an alphanumeric.' }).min(1, { message: 'Password is required' }).min(5, { message: 'Too short, must be at least 5 characters' }),
                confirmPassword: z.string().min(1, { message: 'Confirm password is required' })
            })
            .refine((data) => data.password === data.confirmPassword, { message: 'Password doesn\'t match.', path: ['confirmPassword'] })

        const User = UserSchema.parse({
            email: formData.get('email'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        })

        const res = await fetch(`${process.env.API_URI}/api/v1/auth/signup`, {
            cache: 'no-store',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: User.email,
                fullName: {
                    first: User.firstName,
                    last: User.lastName,
                },
                password: User.password
            })
        })

        const data = await res.json()

        if (!data.success) {
            result.message = data.message

            if (data.message === 'Email is in used.') {
                result.email = data.message
            }

            return result
        }

        cookies().set({
            name: 'otp-email',
            value: User.email,
            secure: true,
        })

        result.success = true
        return result

    } catch (e) {
        if (e instanceof z.ZodError) {
            e.errors.map((value, index) => {
                const indexResult = value.path[0].toString()
                if (!result[indexResult]) {
                    result[indexResult] = value.message
                }
            })
        }
        return result
    }


}