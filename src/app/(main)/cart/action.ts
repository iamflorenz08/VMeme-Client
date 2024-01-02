'use server'
import { authOptions } from '@/utils/authOption'
import { IStatus } from '@/types/statusTypes'
import { getServerSession } from 'next-auth'
import z from 'zod'
import { ICheckOutStatus } from './checkOutForm'
import { revalidatePath } from 'next/cache'

const checkOutSchema = z.object({
    email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email.' }),
    phoneNumber: z.string().min(1, { message: 'Phone number is required.' }),
    address: z.string().min(1, { message: 'Address is required.' }),
    zipCode: z.number().min(1, { message: 'Zip code is required.' }),
    referenceID: z.string().min(1, { message: 'Reference number is required.' }),
})


export const completeCheckOut = async (prevState: any, formData: FormData) => {
    const result: ICheckOutStatus = {
        success: false,
        message: null,
        email: null,
        phoneNumber: null,
        address: null,
        zipCode: null,
        referenceID: null,
    }

    try {
        const session = await getServerSession(authOptions)
        const {
            email,
            phoneNumber,
            address,
            zipCode,
            referenceID,
        } = checkOutSchema.parse({
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            address: formData.get('address'),
            zipCode: Number(formData.get('zipCode')),
            referenceID: formData.get('referenceID'),
        })

        const res = await fetch(`${process.env.API_URI}/api/v1/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: session?.user._id,
                email,
                phoneNumber,
                address,
                zipCode,
                referenceID,
                paymentMethods: formData.get('paymentMethods')
            })
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)
        result.success = true
        revalidatePath('/cart')
    } catch (e) {
        if (e instanceof z.ZodError) {
            e.errors.map((value, index) => {
                const indexResult = value.path[0].toString()
                if (!result[indexResult]) {
                    result[indexResult] = value.message
                }
            })
        }

        if (e instanceof Error) {
            result.message = e.message
        }

        result.success = false
    }
    return result
}

export const deleteItemInCart = async (prevState: any, formData: FormData) => {
    const result: IStatus = {
        success: false,
        message: null
    }
    try {
        const session = await getServerSession(authOptions)
        if (!session) throw new Error('You\'re not allowed here.')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/v1/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: session?.user._id,
                paintingID: formData.get('paintingID')
            })
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message)
        result.success = true
        revalidatePath('/cart')
    } catch (e: any) {
        result.message = e.message
        result.success = false
    }

    return result
}