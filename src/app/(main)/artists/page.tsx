import Image from "next/image";
import Link from 'next/link'

interface IArtists {
    _id: string,
    imageURL: string,
    name: string,
    description: string
}
interface IResult {
    totalDocuments: number,
    page: number
    data: [IArtists]
}

const getArtists = async () => {
    const res = await fetch(`${process.env.API_URI}/api/v1/artist?limit=all`, { cache: 'no-cache' })
    return res.json()
}

export default async function ArtistsPage() {
    const artists: IResult = await getArtists()
    return (
        <main className="container mx-auto xl:px-20 xl:py-20 flex flex-col gap-10 duration-300 ">

            <div className="relative mx-5 md:mx-0">
                <input
                    className="border border-gray-300 w-96 h-11 rounded-full py-2 px-4 outline-none"
                    placeholder="Search..."
                    type="text" name="search" id="search" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 md:mx-0">
                {artists.data.map((artist, index) => (
                    <div key={index} className="w-full relative flex">
                        <Image className="object-cover w-full max-h-[450px]" src={artist.imageURL} alt="artist" width={800} height={800} />
                        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 flex flex-col gap-5 items-center justify-center text-white ">
                            <h1 className="tracking-[10px] text-xl uppercase">{artist.name}</h1>
                            <Link href={'/artists/' + (artist._id)} className="px-6 py-2 border border-white">View arts</Link>
                        </div>
                    </div>
                ))}
            </div>

        </main>
    )
}
