'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { IArtist } from '@/types/artists';
import Link from 'next/link';

interface IProps {
    artists: Array<IArtist>
}

export default function ArtistsSection({ artists }: IProps) {
    return (
        <section className='duration-300 mt-20'>
            <div className='container mx-auto px-5 md:px-0 xl:px-20'>

                <Link
                    href={'/artists'}
                    className='group hover:opacity-80 font-black px-3 py-2 my-8 md:mx-0 text-3xl xl:text-4xl 2xl:text-5xl text-primary border-l-8 border-primary tracking-widest flex duration-300'>
                    <h1>Artists</h1>
                    <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                        <MdNavigateNext />
                    </span>
                </Link>
            </div>


            <div className='my-28'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 4
                        },
                        1536: {
                            slidesPerView: 5
                        }
                    }}
                >
                    {artists.map((artist, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex justify-center'>
                                <Link
                                    href={'/artists/' + artist._id}
                                    className='flex flex-col gap-6 w-fit px-5'>
                                    <Image className='h-[380px]  object-cover object-top' src={artist.imageURL} alt='artist' width={1000} height={1000} />
                                    <h1 className='text-black text-left uppercase font-bold'>{artist.name}</h1>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}
