import React from 'react'
import AddArtistButton from './addArtistButton'
import Image from 'next/image'
import Link from 'next/link'
const getArtists = async (page?: number) => {

    const res = await fetch(`${process.env.API_URI}/api/v1/artist?page=${page}`)
    return res.json()
}

interface IProps {
    searchParams: { page: number }
}

interface IArtists {
    totalDocuments: number,
    page: number
    data: [
        {
            _id: string,
            imageURL: string,
            name: string,
            description: string
        }
    ]
}

export default async function DashboardPage({ searchParams }: IProps) {
    let page = Number(searchParams.page) || 1
    const artists: IArtists = await getArtists(page)
    return (
        <main className='h-full max-h-full p-8 overflow-auto flex flex-col gap-8'>
            <h1 className='font-medium text-4xl'>Artists Page</h1>

            <div className='flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg'>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        className='outline-none border border-gray rounded-full px-4 py-1.5'
                        placeholder='Search'
                    />
                    <AddArtistButton />
                </div>

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
                        {artists.data?.map((data, index) => (
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
                                <td className='py-4'>Actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className='flex justify-between items-center'>
                    <span>Showing {((artists.page - 1) * 10) + 1} to {artists.page * 10} of {artists.totalDocuments} results</span>
                    <div className='flex gap-5'>
                        <Link
                            href={'/admin/artists?page=' + (page > 1 ? page - 1 : 1)}
                            className='bg-primary text-white px-5 py-2 rounded-md'>
                            Previous
                        </Link>
                        <Link
                            href={'/admin/artists?page=' + (page + 1)}
                            className='bg-primary text-white px-5 py-2 rounded-md'>
                            Next
                        </Link>
                    </div>
                </div>
            </div>


        </main>
    )
}
