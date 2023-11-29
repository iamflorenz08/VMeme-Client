import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { useFormState, useFormStatus } from 'react-dom'
import { addArtist } from './action'
import { useEffect, useState } from 'react'
import Image from 'next/image'
interface IProps {
    isShow: boolean,
    showCallback: (value: boolean) => void
}

export interface IState {
    [key: string]: string | any,
    success: boolean
    message: string | null,
    artistFullName: string | null
}

const initialState: IState = {
    success: false,
    message: null,
    artistFullName: null
}

export default function ArtistsModal({ isShow, showCallback }: IProps) {
    const { pending } = useFormStatus()
    const [status, formAction] = useFormState(addArtist, initialState)
    const [imagePreview, setImagePreview] = useState<string>('')


    //sets to default value when the model opened
    useEffect(() => {
        if (isShow) {
            setImagePreview('')
        }
        else {
            status.success = false
        }
    }, [isShow])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const imageURL = event.target.files?.[0]
        if (!imageURL) {
            setImagePreview('')
            return
        }
        setImagePreview(URL.createObjectURL(imageURL))
    }

    if (status.success) showCallback(false)
    if (!isShow) return null

    return (
        <div className=" bg-black bg-opacity-50 absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center">
            <div className="bg-white w-[600px] p-5 rounded-lg flex flex-col gap-5">
                <h1 className="font-medium text-2xl">Details</h1>
                <form action={formAction} className='flex flex-col gap-5'>
                    <div className='flex justify-between gap-5 '>
                        <div className='flex flex-col gap-5 w-full '>
                            <input
                                type="text"
                                className="min-w-full px-3 py-3 outline-none rounded-md border border-gray"
                                name="artistFullName"
                                id="artistFullName"
                                placeholder='Artsist Full Name' />

                            <textarea
                                placeholder='Description'
                                name="description"
                                id="description"
                                className='w-full h-full  px-3 py-3 outline-none rounded-md border border-gray' />
                        </div>

                        <input
                            accept="image/*"
                            type="file"
                            className="hidden"
                            name="artistImage"
                            id="artistImage"
                            onChange={handleImageChange} />

                        <label
                            htmlFor="artistImage"
                            className="bg-gray min-w-[15rem] h-60 flex items-center justify-center relative">

                            {imagePreview ? (
                                <Image
                                    className='h-60 w-60 object-cover'
                                    src={imagePreview || ''}
                                    alt='preview'
                                    height={240}
                                    width={240}
                                />
                            ) : (
                                <FaPlus size={40} className="opacity-40" />
                            )}
                        </label>
                    </div>
                    <div className='border border-gray'></div>
                    <div className='flex justify-end gap-3 text-white'>
                        <button
                            disabled={pending}
                            type='submit'
                            className='px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 duration-300'>
                            Add
                        </button>
                        <button
                            onClick={() => showCallback(false)}
                            type='button'
                            className='px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 duration-300'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
