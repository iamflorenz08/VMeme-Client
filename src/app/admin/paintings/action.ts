'use server'
import z from 'zod'
import { IState } from "./paintingsModal"
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/utils/firebaseStorage'
import { revalidatePath } from 'next/cache'

export const addPaintings = async (prevState: any, formData: FormData) => {
    const result: IState = {
        success: false,
        message: null
    }
    let storageRef
    try {
        const paintingSchema = z.object({
            paintingName: z.string().min(1, { message: 'Painting\'s name is required' }),
            description: z.string().min(1, { message: 'Painting\'s description is required' }),
            artistId: z.string().min(1, { message: 'Artist is required' }),
            paintingType: z.enum(["artist", "exhibition"], { invalid_type_error: 'Painting type is required.' }),
            price: z.number().min(1, { message: 'Price is required' }),
        })

        const paintingDetails = paintingSchema.parse({
            paintingName: formData.get('paintingName'),
            description: formData.get('description'),
            artistId: formData.get('artistId'),
            paintingType: formData.get('paintingType'),
            price: Number(formData.get('price'))
        })

        const image = formData.get('paintingImageURL') as File
        if (image.type.indexOf('image/') === -1) throw Error('File doesn\'t support or empty.')
        storageRef = ref(storage, 'artists/' + Math.floor(Date.now() / 1000) + image.name)
        await uploadBytes(storageRef, image)
        const imageURL = await getDownloadURL(storageRef)

        const res = await fetch(`${process.env.API_URI}/api/v1/paintings`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: paintingDetails.paintingName,
                description: paintingDetails.description,
                imageURL,
                artist: paintingDetails.artistId,
                type: paintingDetails.paintingType,
                price: paintingDetails.price
            })
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        result.message = data.message
        result.success = true
        revalidatePath('/admin/paintings')
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

        if (storageRef) {
            await deleteObject(storageRef)
        }

        result.success = false
    }

    return result
}