'use client'
import { useState, useEffect } from 'react'

interface IProps {
    email: string | null | undefined
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default function ResendOTPButton({ email }: IProps) {
    const [countdown, setCountdown] = useState<number>(60 * 3)
    const [generatingOTP, setGeneratingOTP] = useState<boolean>(false)

    const generateOTP = async () => {
        if (email === null || email === undefined) return
        setGeneratingOTP(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/v1/auth/otp`, {
            next: { revalidate: 60 * 3 },
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })
        setGeneratingOTP(false)
        if (!res.ok) throw new Error('Unable to send OTP')
        setCountdown(60 * 3)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(value => {
                if (value === 0) {
                    clearInterval(timer)
                    return 0
                }
                return value - 1
            })
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [countdown])

    return (
        <button
            disabled={countdown != 0 || generatingOTP}
            onClick={generateOTP}
            className={`w-fit ${countdown || generatingOTP ? 'opacity-50' : ''}`}>
            Resend OTP{countdown ? ' in ' + formatTime(countdown) : ''}
        </button>
    )
}
