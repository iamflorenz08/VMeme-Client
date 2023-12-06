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
                <h2 className="text-2xl font-bold mb-4">Espiro</h2>
                <hr className="mb-4" />
                <p className="mb-4">
                    Mark Barretto, Pedro Felix Garcia II, Mark Magistrado, Lawrence Borsoto, Tad Pagaduan, Oliver Abe Ramos, Ivan Roxas and Cj Tanedo
                </p>
                <hr className="mb-4" />
                <hr className="mb-4" />
                <p className="mb-4">May 2023</p>
            </div>

            <div>
                <Image
                    className="bg-red-200 w-full h-200 object-cover mb-4"
                    src="/espiro_artist.webp"  
                    alt="dead vision"
                    width={1000}
                    height={200}
                    style={{ height: '200px' }}
                />
                <p className='mb-4'>
                    FAM, formed in 2019 by Addie Cukingnan and Remy Boquiren, is a mix of mid-career and seasoned artists known for their individual style of floral compositions. 
                    Exhibiting their works are Lanelle Abueva-Fernando, Naomi Banal, Flor Baradi, Sue Bernardo-Montelibano, Remy Boquiren, Chie Cruz, Addie Cukingnan, Lisa De Leon-Zayco, 
                    Joey Dyhianto, Eileen Bondoc Escueta, Julia Lopue, Inka Madera, Jinky Rayo, Maria Ann Reyes, Alicia Santos, Sheila Tiangco, Jo Uygongco, Melissa Villasenor and Inna 
                    Naanep-Vitasa. In FLOURISH group exhibit, FAM members celebrate a garland of women’s artistry, a bouquet of skills and creativity put together as a colorful arrangement.
                </p>
            </div>

            <div>
                <p className='mb-4'>
                    A nurturing environment that allows each plant to grow is where all flowers bloom. The same can be said about FAM as a collective of women that flourishes together by nurturing 
                    each other’s individuality. As women, we don’t always have to all be the same or aspire for the same things, but it’s best that we always allow each other to bloom. An all-female 
                    group such as FAM exemplifies the best way to flourish as a solid community supporting each other as a family. There won’t be a better testament to this than the bright, playful 
                    and colorful flowers in this exhibit.
                </p>
                <p className='mb-4'>
                
                </p>
                <p className="font-bold italic mb-10">
                    Text by Vmeme
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
            <div className='flex justify-center items-center mb-16'>
                <div className='flex flex-col w-fit px-5'>
                <Image className='h-[380px] object-cover object-top' src={'/gravity.webp'} alt='gravity' width={1000} height={1000} />
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
