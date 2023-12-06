'use server'
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { IState } from "./artistsModal"
import { storage } from "@/utils/firebaseStorage"
import z from 'zod'
import { revalidatePath } from "next/cache"

const artistSchema = z.object({
    artistFullName: z.string().min(1, { message: 'Name is required.' })
})

export const addArtist = async (prevState: any, formData: FormData) => {
    const result: IState = {
        success: false,
        message: null,
        artistFullName: null
    }

    let storageRef
    try {
        const image = formData.get('artistImage') as File
        if (image.type.indexOf('image/') === -1) throw Error('File doesn\'t support or empty.')
        storageRef = ref(storage, 'artists/' + Math.floor(Date.now() / 1000) + image.name)
        await uploadBytes(storageRef, image)
        const imageURL = await getDownloadURL(storageRef)

        const artistClean = artistSchema.parse({
            artistFullName: formData.get('artistFullName')
        })

        const res = await fetch(`${process.env.API_URI}/api/v1/artist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                artistFullName: artistClean.artistFullName,
                description: formData.get('description'),
                imageURL
            })
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        result.success = true
        revalidatePath('/admin/artists', 'page')
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

        if (e instanceof Error) {
            result.message = e.message
        }

        if (storageRef) {
            await deleteObject(storageRef)
        }
        return result
    }
}

export const saveArtist = async (prevState: any, formData: FormData) => {
    const result: IState = {
        success: false,
        message: null,
        artistFullName: null
    }
    let storageRef
    let imageURL
    try {
        const image = formData.get('artistImage') as File
        if (image.type.indexOf('image/') === -1) {
            imageURL = formData.get('artistImageURL')
        }
        else {
            storageRef = ref(storage, 'artists/' + Math.floor(Date.now() / 1000) + image.name)
            await uploadBytes(storageRef, image)
            imageURL = await getDownloadURL(storageRef)
        }

        const artistClean = artistSchema.parse({
            artistFullName: formData.get('artistFullName')
        })


        const res = await fetch(`${process.env.API_URI}/api/v1/artist/${formData.get('artistId')}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: artistClean.artistFullName,
                description: formData.get('description'),
                imageURL: imageURL
            })
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        result.success = true
        revalidatePath('/admin/artists', 'page')
        return result
    } catch (e: any) {
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
        return result
    }
}