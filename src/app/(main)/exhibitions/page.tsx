import { MdNavigateNext } from "@react-icons/all-files/md/MdNavigateNext";
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious";
import Image from "next/image";
import Link from "next/link";

interface IExhibits {
    title: string,
    src: string,
    alt: string,
    href: string
}

const CurrentExhibits: IExhibits[] = [
    {
        title: 'Bente Singko SenTiMo',
        src: '/bente_singko.webp',
        alt: 'exhibition',
        href: '/benteSingkoSentimo'
    },
    {
        title: 'WOKE UP LIKE THIS',
        src: '/woku_up_like_this.webp',
        alt: 'exhibition',
        href: '/wokeUpLikeThis'
    },
    {
        title: 'ESPIRO',
        src: '/espiro_exh.webp',
        alt: 'exhibition',
        href: '/espiro'
    },
    {
        title: 'The Deliberate Circumstance of Unpredictability',
        src: '/tdcu.webp',
        alt: 'exhibition',
        href: '/'
    },
    {
        title: 'FLOURISH',
        src: '/floral_artist_manila_exh.webp',
        alt: 'exhibition',
        href: '/flourish'
    },
]

export default function page() {
    return (
        <main className="flex flex-col container mx-auto xl:px-20 mt-20 mb-20 duration-300">
            <div className="max-w-full mx-auto columns-3 space-y-5 gap-5">
                {CurrentExhibits.map((value, index) => (
                    <div key={index} className={`group w-full h-full relative`}>
                        <Image className="w-full" src={value.src} alt={value.alt} height={1000} width={1000} />
                        <div
                            className="bg-black absolute top-0 left-0 w-full 
                        h-full bg-opacity-50 opacity-0 group-hover:opacity-100 
                        duration-300 flex flex-col gap-5 items-center justify-center text-white">
                            <h1 className="font-black text-xl text-center">{value.title}</h1>
                            <Link
                                href={'/exhibitions/' + value.href}
                                className="px-4 py-2 border-2 border-white hover:bg-primary duration-300">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div >

            <div className="flex justify-between">
                <button className='group hover:opacity-80 font-black px-3 py-2 my-14 text-xl xl:text-2xl 2xl:text-3xl text-primary border-4 border-primary tracking-widest flex duration-300'>
                    <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                        <GrFormPrevious />
                    </span>
                    <h1>Prev Exhibitions</h1>
                </button>

                <button className='group hover:opacity-80 font-black px-3 py-2 my-14 text-xl xl:text-2xl 2xl:text-3xl text-primary border-4 border-primary tracking-widest flex duration-300'>
                    <h1>Next Exhibitions</h1>
                    <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                        <MdNavigateNext />
                    </span>
                </button>
            </div>
        </main >
    )
}
