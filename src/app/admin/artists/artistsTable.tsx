'use client'
import { IArtist } from '@/types/artists'
import Image from 'next/image'
import { useState } from 'react'
import ArtistsModal from './artistsModal'

interface IProps {
    artists: Array<IArtist>
}

export default function ArtistsTable({ artists }: IProps) {
    const [modal, setModal] = useState<boolean>(false)
    const [selectedArtist, setSelectedArtist] = useState<IArtist>()
    return (
        <>
            <table className='table-auto w-full border-t border-gray bg-red-200 '>
                <thead className='text-center'>
                    <tr className='bg-primary text-white'>
                        <th className='py-5'></th>
                        <th className='py-5'>Artist name</th>
                        <th className='py-5'>Description</th>
                        <th className='py-5'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center overflow-auto'>
                    {artists?.map((data, index) => (
                        <tr key={index} className='odd:bg-white even:bg-primary-100'>
                            <td className='py-4 flex justify-center items-center'>
                                <Image
                                    className='w-12 h-12 rounded-full object-cover'
                                    src={data.imageURL}
                                    alt="artistIcon"
                                    height={50}
                                    width={50}
                                />
                            </td>
                            <td className='py-4'>{data.name}</td>
                            <td className='py-4 h-fit w-[500px]'>
                                <p className='truncate w-[500px]'>{data.description}</p>
                            </td>
                            <td className='py-4'>
                                <button
                                    onClick={() => {
                                        setSelectedArtist(data)
                                        setModal(true)
                                    }}
                                    className='px-6 py-1 text-white bg-primary rounded-md'>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ArtistsModal
                artist={selectedArtist}
                isShow={modal}
                showCallback={(state) => setModal(state)}
            />
        </>
    )
}
