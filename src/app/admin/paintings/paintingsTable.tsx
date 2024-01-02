'use client'
import { IPainting } from "@/types/paintings";
import Image from "next/image";
import { useState } from "react";
import PaintingsModal from "./paintingsModal";

interface IProps {
    paintings: Array<IPainting>
}

export default function PaintingsTable({ paintings }: IProps) {
    const [modal, setModal] = useState<boolean>(false)
    const [selectedPainting, setSelectedPainting] = useState<IPainting>()

    return (
        <>
            <table className='table-auto w-full border-t border-gray bg-red-200 '>
                <thead className='text-center'>
                    <tr className='bg-primary text-white'>
                        <th className='py-5'></th>
                        <th className='py-5'>Painting&apos;s name</th>
                        <th className='py-5'>Artist name</th>
                        <th className='py-5'>Description</th>
                        <th className='py-5'>Type</th>
                        <th className='py-5'>Price</th>
                        <th className='py-5'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center overflow-auto'>
                    {paintings.map((painting, index) => (
                        <tr key={index} className='odd:bg-white even:bg-primary-100'>
                            <td className='py-4 flex justify-center w-full '>
                                <Image
                                    className="h-12 w-12 rounded-full object-cover"
                                    src={painting.imageURL}
                                    alt="painting"
                                    height={48}
                                    width={48}
                                />
                            </td>
                            <td className='py-4'>{painting.name}</td>
                            <td className='py-4'>{painting.artist.name}</td>
                            <td className='py-5'>{painting.description}</td>
                            <td className='py-4'>{painting.type}</td>
                            <td className='py-4'>{painting.price}</td>
                            <td className='py-4'>
                                <button
                                    onClick={() => {
                                        setSelectedPainting(painting)
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

            <PaintingsModal
                painting={selectedPainting}
                isShow={modal}
                showCallback={(state) => setModal(state)}
            />
        </>
    )
}
