'use client'
import { signIn } from "next-auth/react"
import { useState } from "react"
import z from 'zod'
import { useRouter } from "next/navigation"

export default function VerifyOTP() {
    const router = useRouter()
    const [otp, setOtp] = useState<string>('')
    const [error, setError] = useState<string | undefined | null>('')

    const verifyOTP = async () => {
        try {
            const OTPSchema = z.object({
                otp: z.string().min(1, { message: "OTP is required." }).length(6, 'Invalid OTP code.')
            })

            const data = OTPSchema.parse({
                otp
            })

            const credentials = await signIn('credentials', {
                otp: data.otp,
                redirect: false,
                callbackUrl: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}`
            })

            if (!credentials?.ok) return setError(credentials?.error)
            setError('')
            router.push(credentials.url || '/')
        } catch (e) {
            if (e instanceof z.ZodError) {
                setError(e.errors[0].message)
            }
        }

    }
    return (
        <>
            <div className='flex flex-col gap-2 w-full mt-5'>
                <input
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                    className={`border ${error ? 'border-red-500' : 'border-gray-500'} px-4 py-3 rounded-md text-lg outline-none`}
                    placeholder='Ex. A123BD'
                    type="email" name="email" id="email" />
                <label htmlFor="email" className={`text-sm ${error && 'text-red-500'}`}>{error}</label>
            </div>

            <button
                onClick={verifyOTP}
                className='bg-primary rounded-full text-white py-3 mt-3 w-full'>Verify OTP</button>
        </>
    )
}
