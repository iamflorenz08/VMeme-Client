import Image from "next/image"
import Link from "next/link"
import { GoSearch } from '@react-icons/all-files/go/GoSearch'

interface IProps {
    params: { artistID: string }
}

interface IArtist {
    _id: string,
    name: string,
    description: string,
    imageURL: string
}

interface IPainting {
    _id: string,
    name: string,
    description: string,
    imageURL: string,
    price: number
}

const getArtistData = async (artistID: string) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/artist/${artistID}`, { cache: 'no-store' })
    return res.json()
}


export default async function ArtistPage({ params: { artistID } }: IProps) {
    const { artist, paintings }: { artist: IArtist, paintings: IPainting[] } = await getArtistData(artistID)
    return (
        <main className="container mx-auto xl:px-20 md:my-20 w-full flex flex-col gap-20 mb-10">
            <section className="px-5 md:px-0 flex flex-col lg:flex-row gap-5 lg:h-[450px]">
                <Image
                    className="w-full max-h-[450px] object-cover object-top"
                    src={artist.imageURL}
                    alt="artist"
                    width={1000}
                    height={500} />

                <div className="w-full max-h-full flex flex-col justify-center">
                    <h1 className="text-4xl xl:text-5xl tracking-wide flex flex-wrap border-primary border-l-[10px]  py-4 font-[400] h-fit justify-center">
                        {artist.name}
                    </h1>
                    <p className="text-justify w-full overflow-y-auto">
                        {artist.description}
                    </p>
                </div>
            </section>

            <section className="px-5 md:px-0 flex flex-col gap-10">
                <h1 className="text-4xl xl:text-5xl  tracking-wide flex flex-wrap border-primary border-l-[10px] justify-center lg:pl-3 lg:justify-start py-4 font-[400]">
                    Artworks
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {paintings.map((painting, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2">
                            <Link
                                href={'/paintings/' + painting._id}
                                prefetch={false}
                                className="bg-gray p-3 h-full relative group">
                                <Image
                                    className="w-full h-[180px] md:h-[300px] object-cover"
                                    src={painting.imageURL}
                                    alt="artwork"
                                    width={200}
                                    height={200} />

                                <div className="flex items-center justify-center group-hover:opacity-100 bg-opacity-50 opacity-0 bg-black absolute top-0 left-0 w-full h-full duration-300 text-white text-opacity-70">
                                    <GoSearch size={40} />
                                </div>
                            </Link>
                            <div className="flex flex-col">
                                <span className="md:text-lg tracking-widest">{painting.name}</span>
                                <span className="font-medium md:text-xl text-primary">₱{painting.price}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </main>
    )
}
