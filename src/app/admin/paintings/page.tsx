import Image from "next/image";
import AddPaintingsButton from "./addPaintingsButton";

const getPaintings = async () => {
    const res = await fetch(`${process.env.API_URI}/api/v1/paintings`)
    return res.json()
}

interface IPaintings {
    _id: string,
    name: string,
    description: string,
    imageURL: string,
    artist: {
        _id: string,
        name: string,
        imageURL: string
    },
    type: string,
    price: number
}

interface IResult {
    totalDocuments: 2,
    page: 1,
    data: [IPaintings]
}

export default async function PaintingsPage() {
    const paintings: IResult = await getPaintings()
    return (
        <main className='flex flex-col h-full p-8 gap-8 overflow-auto'>
            <h1 className='font-medium text-4xl h-fit'>Paintings Page</h1>
            <div className='flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg'>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        className='outline-none border border-gray rounded-full px-4 py-1.5'
                        placeholder='Search'
                    />
                    <AddPaintingsButton />
                </div>

                <table className='table-auto w-full border-t border-gray bg-red-200 '>
                    <thead className='text-center'>
                        <tr className='bg-primary text-white'>
                            <th className='py-5'></th>
                            <th className='py-5'>Painting's name</th>
                            <th className='py-5'>Artist name</th>
                            <th className='py-5'>Description</th>
                            <th className='py-5'>Type</th>
                            <th className='py-5'>Price</th>
                            <th className='py-5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {paintings.data.map((painting, index) => (
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
                                <td className='py-4'>Actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className='flex justify-between items-center'>
                    <span>Showing 1 to 10 of 97 results</span>
                    <div className='flex gap-5'>
                        <button className='bg-primary text-white px-5 py-2 rounded-md'>Previous</button>
                        <button className='bg-primary text-white px-5 py-2 rounded-md'>Next</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
