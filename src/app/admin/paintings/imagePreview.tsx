import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import Image from "next/image"
import { useState } from "react"

interface IProps {
    name: string,
    id: string
}

export default function ImagePreview({ id, name }: IProps) {
    const [imagePreview, setImagePreview] = useState<string>()

    return (
        <>
            <input
                accept="image/*"
                type="file"
                className="hidden"
                onChange={(e) => {
                    const imageURL = e.target.files?.[0]
                    if (!imageURL) {
                        setImagePreview('')
                        return
                    }
                    setImagePreview(URL.createObjectURL(imageURL))
                }}
                name={name}
                id={id}
            />

            <label
                htmlFor={id}
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
        </>
    )
}
