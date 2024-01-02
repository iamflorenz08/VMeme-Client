import { GrFormPrevious } from '@react-icons/all-files/gr/GrFormPrevious';
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <main className="flex flex-col container mx-auto xl:px-20 mb-20 duration-300">
      <Image
        className="bg-red-200 w-full h-200 object-cover"
        src={"/bg-exhi.png"}
        alt="background"
        width={1000}
        height={1000}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Roots and Wings</h2>
          <hr className="mb-4" />
          <p className="mb-4">Hae Ryun</p>
          <hr className="mb-4" />
          <hr className="mb-4" />
          <p className="mb-4">September 20 - October 4, 2023</p>
        </div>

        <div>
          <Image
            className="bg-red-200 w-full h-200 object-cover mb-4"
            src="/dead_vision.png"
            alt="dead vision"
            width={1000}
            height={200}
            style={{ height: '200px' }}
          />
          <p>Cloaked in unearthed wildness, the forest emerges as an ancient enigma, mutable ground. The forest whispers an arcane, elusive lyric, and moves to its own temporality.
            In Hae Ryun’s solo exhibition Roots and Wings, the South Korean artist centers her paintings on the eternal mysteries of that undefinable space. In the process,
            she delves ever deeper into an examination of nature’s fluidities and the interconnectedness of nature, painting, and the fragmented self.
          </p>
        </div>

        <div>
          <p className='mb-4'>
            Across these verdant landscapes, wind forms direction through dots and tiny shapes adorning the trees and sky. Wind, as seen in these paintings, harbors our vision and creates
            threads of seeing that expand right alongside the landscape’s surroundings. We are presented with a cosmology that reflects names of village forests all over South Korea,
            passed down through generations. These names evoke descriptions of location, but they also conjure the flow of seasons and our innate desire to start anew. “Saeteo” symbolizes
            a new settlement where one can envision a new life for themselves. Meanwhile, “Haebadi” harkens to a village that basks in bountiful sunlight, a new spring where growth and life
            are made possible again. Often encompassing a guardian forest, these villages serve as a refuge for light, hope, and community.
          </p>
          <p className='mb-4'>
            “Through my work, I aim to rediscover myself and gain a deeper understanding by traversing space and time within the paintings where the wind blows through the forest,”
            Hae Ryun said. Although they do not strike one as immediately introspective upon first glance, these paintings eventually reveal, albeit hesitantly, their interiority.
            The artist’s solicitude, patience, and focus all materialize to bottle up a wellspring of imagination, aglow with the forest’s dispersed and unmediated wonder. It is through
            this dialogue between unpinnable nature and the self that experiences its expansiveness that these paintings awaken and come alive.
          </p>
          <p className="font-bold italic mb-10">
            Text by Sean Carballo
          </p>
        </div>
      </div>

      <div className="flex">
        {[1, 2, 3].map((value, index) => (
          <div
            key={index}
            className='flex justify-center items-center mb-16'>
            <div className='flex flex-col w-fit px-5'>
              <Image className='h-[380px] object-cover object-top' src={'/dead_vision.png'} alt='alaya' width={1000} height={1000} />
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
