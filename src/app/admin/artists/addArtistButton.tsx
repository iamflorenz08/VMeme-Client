'use client'
import { useState } from "react"
import ArtistsModal from "./artistsModal"

export default function AddArtistButton() {
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
        <>
            <button
                onClick={() => setIsShow(true)}
                className='px-4 py-1.5 bg-green-700 hover:bg-green-800 text-white rounded-md'>
                Add artist
            </button>

            <ArtistsModal
                showCallback={(value) => setIsShow(value)}
                isShow={isShow}
            />
        </>
    )
}
