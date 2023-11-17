import { MdNavigateNext } from "@react-icons/all-files/md/MdNavigateNext";
import Image from "next/image";

interface IExhibits {
    title: string,
    src: string,
    alt: string,
}

const CurrentExhibits: IExhibits[] = [
    {
        title: 'Bente Singko SenTiMo',
        src: '/bente_singko.webp',
        alt: 'exhibition'
    },
    {
        title: 'WOKE UP LIKE THIS',
        src: '/woku_up_like_this.webp',
        alt: 'exhibition'
    },
    {
        title: 'ESPIRO',
        src: '/espiro_exh.webp',
        alt: 'exhibition'
    },
    {
        title: 'The Deliberate Circumstance of Unpredictability',
        src: '/tdcu.webp',
        alt: 'exhibition'
    },
    {
        title: 'FLOURISH',
        src: '/floral_artist_manila_exh.webp',
        alt: 'exhibition'
    },
]

export default function page() {
    return (
        <main className="flex flex-col container mx-auto xl:px-20 my-20">
            <button className='group hover:opacity-80 font-black px-3 py-2 mb-8 mx-5 md:mx-0 text-3xl xl:text-4xl 2xl:text-5xl text-primary border-l-8 border-primary tracking-widest flex duration-1000'>
                <h1>Current Exhibitions</h1>
                <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-1000'>
                    <MdNavigateNext />
                </span>
            </button>
            <div className="max-w-full mx-auto columns-3 space-y-5 gap-5">
                {CurrentExhibits.map((value, index) => (
                    <div key={index} className={`group w-full h-full relative`}>
                        <Image className="w-full" src={value.src} alt={value.alt} height={1000} width={1000} />
                        <div
                            className="bg-black absolute top-0 left-0 w-full 
                        h-full bg-opacity-50 opacity-0 group-hover:opacity-100 
                        duration-300 flex flex-col gap-5 items-center justify-center text-white">
                            <h1 className="font-black text-xl text-center">{value.title}</h1>
                            <button className="px-4 py-2 border-2 border-white hover:bg-primary duration-300">View Details</button>
                        </div>
                    </div>
                ))}
            </div >
        </main >
    )
}
