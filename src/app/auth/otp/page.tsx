import ResendOTPButton from "./resendOTPButton"
import { cookies } from "next/headers"
import VerifyOTP from "./verifyOTP"
import { redirect } from "next/navigation"

const generateOTP = async () => {
    try {
        const res = await fetch(`${process.env.API_URI}/api/v1/auth/otp`, {
            next: { revalidate: 60 * 3 },
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: cookies().get('otp-email')?.value
            })
        })

        const data = await res.json()

        if (!data.success) {
            if (data.message === 'Email not found.') throw new Error(data.message)
            return { success: false, message: data.message }
        }

        return data
    } catch (e: any) {
        if (e.message === 'Email not found.') return redirect('/auth/signin')
        throw new Error(e.message)
    }
}

export default async function OTPPage() {
    const email = cookies().get('otp-email')?.value
    const { message, success } = await generateOTP()
    
    return (
        <main className='h-full w-full flex flex-col gap-5 items-center justify-center'>
            <div className='shadow-lg flex flex-col gap-3 p-8 max-w-[400px] w-full items-center'>
                <h1 className='font-medium text-3xl text-center'>Check your email!</h1>
                <p className="opacity-50">We have sent an OTP to your email</p>
                <VerifyOTP />
                <ResendOTPButton email={email} />
            </div>
        </main>
    )
}
