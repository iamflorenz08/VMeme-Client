import { GrFormPrevious } from '@react-icons/all-files/gr/GrFormPrevious';
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext';
import Image from 'next/image';
import React from 'react'

export default function page() {
    return (
        <main className="flex flex-col container mx-auto xl:px-20 mb-20 duration-300">
            <Image
                className="bg-red-200 w-full h-1000 object-cover mb-4"
                src="/espiro_exh.webp"
                alt="dead vision"
                width={1500}
                height={1000}
                style={{ height: '750px' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Woke Up Like This</h2>
                    <hr className="mb-4" />
                    <p className="mb-4">
                        Flor Baradi
                    </p>
                    <hr className="mb-4" />
                    <hr className="mb-4" />
                    <p className="mb-4">May 2023</p>
                </div>

                <div>
                    <Image
                        className="bg-red-200 w-full h-200 object-cover mb-4"
                        src="/flor_baradi.webp"
                        alt="dead vision"
                        width={1000}
                        height={200}
                        style={{ height: '200px' }}
                    />
                    <p className='mb-4'>
                        WOKE UP LIKE THIS: FLOR BARADI’S 3rd Solo Exhibit opens at vMeme Estancia is a timely conversation about selfies, OOTDs, #nofilters in contemporary social media in Flor
                        Baradi’s solo exhibit entitled WOKE UP LIKE THIS, opening on May 14, 4:00 pm at vMeme x Young Artists’ Studio in Estancia Mall.
                    </p>
                </div>

                <div>
                    <p className='mb-4'>
                        To describe this show as playful, fantastic and witty is truthful but may be a simplification of a multilayered art process and practice that make up Flor Baradi’s
                        grotesque series. In this show, Baradi’s skillful and insightful aesthetic greets the audience with a new and forward perspective on self-representation, women’s imagery,
                        social and consumer cultures.
                    </p>
                    <p className='mb-4'>
                        “These artworks are part of a series entitled ‘The Grotesques’, a tribute to iconic women- Renaissance muses, Supermodels of the 80s, Hollywood stars, 50’s pin-up girls,
                        and Instagram influencers. The series is a tongue-in-cheek representation of the absurdities we currently see, hear, and experience e.g. fake news, history revisionism,
                        climate change denial, science doubters, sexism, racism, ridiculous standards of beauty/lifestyle.”, shares Flor Baradi.
                    </p>
                    <p className="font-bold italic mb-10">
                        Text by Flor Baradi
                    </p>
                </div>
            </div>

            <button className='group hover:opacity-80 font-black px-3 py-2 my-8 mx-5 md:mx-0 text-3xl xl:text-4xl 2xl:text-5xl text-primary border-l-8 border-primary tracking-widest flex duration-300'>
                <h1>Artwork Collection</h1>
                <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                    <MdNavigateNext />
                </span>
            </button>

            <div className="flex">
                {[1, 2, 3, 4].map((value, index) => (
                    <div
                        key={index}
                        className='flex justify-center items-center mb-16'>
                        <div className='flex flex-col w-fit px-5'>
                            <Image className='h-[380px] object-cover object-top' src={'/anais.png'} alt='anais' width={1000} height={1000} />
                            <p className='italic'>Trace-2310</p>
                            <p className='font-bold'>Hae Ryun</p>
                            <p>10.7 x 16 inches (27.3 x 40.9 cm)</p>
                            <p>oil on canvas</p>
                            <p>2023</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                <button className='group hover:opacity-80 px-3 py-2 my-14 text-xl xl:text-2xl 2xl:text-3xl text-black border-2 border-black hover:text-primary hover:border-primary tracking-widest flex duration-300'>
                    <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                        <GrFormPrevious />
                    </span>
                    <h1>Prev Exhibitions</h1>
                </button>

                <button className='group hover:opacity-80 px-3 py-2 my-14 text-xl xl:text-2xl 2xl:text-3xl text-black border-2 border-black hover:text-primary hover:border-primary tracking-widest flex duration-300'>
                    <h1>Next Exhibitions</h1>
                    <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                        <MdNavigateNext />
                    </span>
                </button>
            </div>

        </main>
    );
}
