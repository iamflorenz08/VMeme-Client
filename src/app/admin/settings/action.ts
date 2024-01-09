'use server'
import { storage } from "@/utils/firebaseStorage"
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { revalidatePath } from "next/cache"

export const updateProfile = async (formData: FormData) => {
    let storageRef
    let toUpdate = {}
    try {
        const image = formData.get('imageURL') as File
        if (image.size > 0) {
            storageRef = ref(storage, 'profiles/' + Math.floor(Date.now() / 1000) + '_vmeme')
            await uploadBytes(storageRef, image)
            const imageURL = await getDownloadURL(storageRef)
            toUpdate = { imageURL }
        }

        toUpdate = {
            ...toUpdate,
            name: formData.get('name'),
        }

        const res = await fetch(`${process.env.API_URI}/api/v1/page`, {
            cache: 'no-store',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toUpdate)
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)
        revalidatePath('/admin/settings')
    } catch (e: any) {
        if (storageRef) {
            deleteObject(storageRef)
        }

        console.log('Update profile: ' + e.message)
    }
}