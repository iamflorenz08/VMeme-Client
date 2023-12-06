import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='bg-primary py-6 flex justify-center'>
            <div className='container mx-auto flex justify-between text-white px-5 md:px-0 xl:px-20 tracking-widest text-sm'>
                <span>
                    © 2023 by vMeme Contemporary Art Projects
                </span>
                <span className='flex items-center gap-2'>
                    | Alabang and Pasig City, Philippines |
                    <Link
                        href={'https://www.facebook.com/VMemeContemporaryArtGallery?mibextid=LQQJ4d'}
                        className='text-xl'>
                        <FaFacebookSquare />
                    </Link>
                    <Link
                        href={'https://instagram.com/vmeme_contemporary?igshid=NGVhN2U2NjQ0Yg=='}
                        className='text-xl'><RiInstagramFill /></Link>
                </span>
            </div>
        </footer>
    )
}
