import Image from "next/image";
import Link from 'next/link'
import SearchBar from "./searchBar";
import { IArtist } from "@/types/artists";

interface IProps {
    searchParams: { search: string, sort: string }
}

interface IResult {
    totalDocuments: number,
    page: number
    data: Array<IArtist>
}

const getArtists = async (search: string, sort: string) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/artist?
    limit=all${search ? '&search=' + search : ''}${sort ? '&sort=' + sort : ''}`, { cache: 'no-cache' })
    return res.json()
}

export default async function ArtistsPage({ searchParams }: IProps) {
    const artists: IResult = await getArtists(searchParams.search, searchParams.sort)
    return (
        <main className="container mx-auto xl:px-20 xl:py-20 flex flex-col gap-10 duration-300 ">

            <div className="relative mx-5 md:mx-0">
                <SearchBar
                    sort={searchParams.sort}
                />
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
