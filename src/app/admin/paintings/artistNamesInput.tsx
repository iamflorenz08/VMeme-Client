import useDropDown from "@/hooks/useDropDown"
import { IPainting } from "@/types/paintings"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

interface IProps {
    id: string,
    name: string,
    painting?: IPainting
}

interface IArtist {
    _id: string,
    name: string,
    imageURL: string,
}

export default function ArtistNamesInput({ id, name, painting }: IProps) {
    const ref = useRef<any>()
    const [search, setSearch] = useState<string>()
    const [artists, setArtists] = useState<Array<IArtist>>([])
    const [selectedArtist, setSelectedArtist] = useState<IArtist>()
    const [loading, setLoading] = useState<boolean>(false)
    const [toggle, setToggle] = useDropDown(false, ref)

    useEffect(() => {
        setLoading(true)
        const timeOut = setTimeout(async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/v1/artist?search=${search}`)
            const artists = await res.json()
            setLoading(false)
            if (!res.ok) return
            setArtists(artists.data)
        }, 2000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [search])


    return (
        <div className="w-full relative">
            <input
                type="text"
                className="w-full px-3 py-3 outline-none rounded-md border border-gray disabled:bg-white"
                readOnly
                value={selectedArtist?.name || painting?.artist.name || ''}
                onClick={() => setToggle(true)}
                placeholder="Select artists"
            />

            <input
                type="hidden"
                name={name}
                id={id}
                value={selectedArtist?._id || painting?.artist._id || ''}
            />

            {toggle && (
                <div ref={ref} className="bg-white absolute mt-3 p-2 w-full shadow-md rounded-md flex flex-col gap-2">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                        type="text"
                        className="border border-gray w-full px-2 py-1 outline-none rounded-md"
                        placeholder="Artist's name..." />
                    <div className="flex flex-col gap-2 max-h-[200px] overflow-auto text-center">
                        {loading ? 'loading' : (
                            artists.map((data, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedArtist(data)
                                        setToggle(false)
                                    }}
                                    type="button"
                                    className="hover:bg-gray text-left px-2 py-2 flex items-center gap-5">
                                    <Image
                                        className="w-12 h-12 object-cover rounded-full"
                                        src={data.imageURL}
                                        alt="artistImage"
                                        width={48}
                                        height={48}
                                    />
                                    {data.name}
                                </button>
                            ))
                        )}

                    </div>
                </div>
            )}
        </div>

    )
}
