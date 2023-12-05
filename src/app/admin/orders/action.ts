'use server'

import { revalidatePath } from "next/cache"

export const updateStatus = async (prevState: any, formData: FormData) => {
    try {
        const res = await fetch(`${process.env.API_URI}/api/v1/order/${formData.get('orderID')}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: formData.get('status')
            })
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message)
        revalidatePath('/admin/orders')
        return {
            success: true,
            message: null
        }
    } catch (e: any) {

        return {
            success: false,
            message: e.message
        }
    }

}