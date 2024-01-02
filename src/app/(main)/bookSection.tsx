import Image from 'next/image'
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'

export default function BookSection() {
    return (
        <section className='container mx-auto px-5 md:px-0 xl:px-20 duration-300 mt-20'>
            <button className='group hover:opacity-80 font-black px-3 py-2 my-8 md:mx-0 text-3xl xl:text-4xl 2xl:text-5xl text-primary border-l-8 border-primary tracking-widest flex duration-300'>
                <h1>Book</h1>
            </button>
            <div className='flex flex-col lg:flex-row items-center gap-5 w-full 2xl:gap-10 my-20'>
                <div className='lg:w-fit'>
                    <Image src={'/peripheral_emotions_book.webp'} alt='espiro' width={500} height={1000} />
                </div>
                <div className='flex flex-col gap-3 xl:gap-5 2xl:gap-7 lg:w-3/4'>
                    <h1 className='font-bold text-2xl 2xl:text-3xl'>Peripheral (e)motions</h1>
                    <p className='text-justify font-light 2xl:text-lg'>
                        The peripheral (e)motions book by Rebie Ramoso is now available for pre-order. A compilation of narratives from the 13 beautiful women based from the artists digital artworks. You may place your order only Php 1,500. Get a chance for a book signing with all the writers.
                    </p>
                    <div className='text-center mt-5 lg:text-left'>
                        <button className='flex items-center px-4 py-2 rounded-md w-fit bg-primary hover:bg-primary-200 text-white duration-300 font-semibold'>
                            Order now
                            <span className='text-2xl'><MdNavigateNext /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
