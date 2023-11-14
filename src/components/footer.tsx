import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'

export default function Footer() {
    return (
        <footer className='bg-primary py-6 flex justify-center'>
            <div className='container mx-auto flex justify-between text-white px-5 md:px-0 xl:px-20 tracking-widest text-sm'>
                <span>
                    © 2023 by vMeme Contemporary Art Projects
                </span>
                <span className='flex items-center gap-2'>
                    | Alabang and Pasig City, Philippines |
                    <button className='text-xl'><FaFacebookSquare /></button>
                    <button className='text-xl'><RiInstagramFill /></button>
                </span>
            </div>
        </footer>
    )
}
