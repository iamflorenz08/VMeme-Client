'use server'
import { cookies } from "next/headers"
import { IState } from "./signInForm"
import z from 'zod'

export const signIn = async (prevState: any, formData: FormData) => {
    const result: IState = {
        email: '',
        password: '',
        message: '',
        success: false
    }

    try {
        const signInSchema = z.object({
            email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email.' }),
            password: z.string().min(1, { message: 'Password is required.' })
        })

        const signInDetails = signInSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        })

        const res = await fetch(`${process.env.API_URI}/api/v1/auth/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: signInDetails.email,
                password: signInDetails.password
            })
        })
        const data = await res.json()

        if (!data.success) {
            result.message = data.message

            if (data.message === 'Email not found.') {
                result.email = data.message
            }

            if (data.message === 'Password doesn\'t match.') {
                result.password = data.message
            }
            
            return result
        }

        cookies().set({
            name: 'otp-email',
            value: signInDetails.email,
            secure: true
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