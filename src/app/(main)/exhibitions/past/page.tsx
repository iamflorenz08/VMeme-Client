import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'
import Image from 'next/image'

export default function PastPage() {
    return (
        <main className="flex flex-col container mx-auto xl:px-20 my-20">
            <button className='group hover:opacity-80 font-black px-3 py-2 mb-8 mx-5 md:mx-0 text-3xl xl:text-4xl 2xl:text-5xl text-primary border-l-8 border-primary tracking-widest flex duration-1000'>
                <h1>Past Exhibitions</h1>
                <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-1000'>
                    <MdNavigateNext />
                </span>
            </button>
            <div className="max-w-full mx-auto columns-3 space-y-5 gap-5">
                <button className="w-full h-full mt-5"><Image className="w-full" src={'/bente_singko.webp'} alt="exhibition" height={1000} width={1000} /></button>
                <button className="w-full h-full"><Image className="w-full" src={'/woku_up_like_this.webp'} alt="exhibition" height={1000} width={1000} /></button >
                <button className="w-full h-full"><Image className="w-full" src={'/espiro_exh.webp'} alt="exhibition" height={1000} width={1000} /></button>
                <button className="w-full h-full"><Image className="w-full" src={'/floral_artist_manila_exh.webp'} alt="exhibition" height={1000} width={1000} /></button>
                <button className="w-full h-full"><Image className="w-full" src={'/tdcu.webp'} alt="exhibition" height={1000} width={1000} /></button >
            </div >
        </main >
    )
}
