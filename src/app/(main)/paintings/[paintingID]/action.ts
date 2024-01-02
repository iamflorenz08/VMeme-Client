'use server'
import { authOptions } from '@/utils/authOption'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import z from 'zod'

const cartSchema = z.object({
    userID: z.string().min(1, { message: 'userID is required' }),
    paintingID: z.string().min(1, { message: 'paintingID is required.' })
})

export const addToCart = async (prevState: any, formData: FormData) => {
    const session = await getServerSession(authOptions)
    try {
        const cartClean = cartSchema.parse({
            userID: session?.user._id,
            paintingID: formData.get('paintingID')
        })

        const res = await fetch(`${process.env.API_URI}/api/v1/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: cartClean.userID,
                paintingID: cartClean.paintingID
            })
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        revalidatePath('/paintings')
        return {
            success: true,
            message: 'Added to cart'
        }

    } catch (e: any) {
        return {
            success: false,
            message: e.message
        }
    }
}

export const removeToCart = async (prevState: any, formData: FormData) => {
    const session = await getServerSession(authOptions)
    try {
        const cartClean = cartSchema.parse({
            userID: session?.user._id,
            paintingID: formData.get('paintingID')
        })

        const res = await fetch(`${process.env.API_URI}/api/v1/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: cartClean.userID,
                paintingID: cartClean.paintingID
            })
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        revalidatePath('/paintings')
        return {
            success: true,
            message: 'Removed to cart'
        }

    } catch (e: any) {
        return {
            success: false,
            message: e.message
        }
    }
}