import { GrFormPrevious } from '@react-icons/all-files/gr/GrFormPrevious';
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext';
import Image from 'next/image';
import React from 'react'

export default function page() {
  return (
    <main className="flex flex-col container mx-auto xl:px-20 mb-20 duration-300">
        <Image
            className="bg-red-200 w-full h-1000 object-cover mb-4"
            src="/AninoLogo.webp"  
            alt="dead vision"
            width={1500}
            height={1000}
            style={{ height: '750px' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Bente Singko SentiMo</h2>
                <hr className="mb-4" />
                <p className="mb-4">
                    Anino Shadowplay Collective
                </p>
                <hr className="mb-4" />
                <hr className="mb-4" />
                <p className="mb-4">May 2023</p>
            </div>

            <div>
                <Image
                    className="bg-red-200 w-full h-200 object-cover mb-4"
                    src="/bente_singko_artist.webp"  
                    alt="dead vision"
                    width={1000}
                    height={200}
                    style={{ height: '200px' }}
                />
                <p className='mb-4'>
                    Ang eksibisyong ito ay panimulang imbitasyon para silipin ang ‘shadowplay’ bilang isang mayabong na anyo ng sining. Sa bawat likhang matutunghayan sa espasyong ito, 
                    ibinibida ang bawat elemento ng pagtatanghal ng ‘shadowplay’, hinihimay ang bighaning dulot ng pagsasanib ng galaw, tunog at ilaw, at iniisa-isa ang hibla ng 
                    karanasang pinagtatagni-tagning anino, salita at musika. Maituturing ang bawat kwadro sa silid na ito bilang maliliit na pagtatanghal – tila maiiksing paanyaya 
                    upang bigyang-pansin na ang payak na mga materyales ay nakabubuo ng malalaki at malalalim na karanasan. Para bang talinhaga na ang bawat maliliit na parte ay 
                    nagpapatayog, nagpapahitik at nagpapalakas ng isang buong presensya. Ganyan naman talaga ang laging ipinamamalas ng grupong ANINO SHADOWPLAY COLLECTIVE – ang 
                    pagititipon ng mga artista ng bayan para sa mabusising pagtatanghal. Bawat talento, bawat kontribusyon, bawat aksyon, kapag pinagsama-sama ay nakakapukaw ng pandama. 
                    Parang maliliit na baryang bumibigat kapag pinagsama-sama, nagkakahalaga, nakakapagpahalaga.
                </p>
            </div>

            <div>
                <p className='mb-4'>
                    Maaaring tawaging patikim ang mga ito, ngunit sa kalaunan ay maituturing na pagsibol ng bagong anyo ng pagsisining at pakikipagsining mula sa grupong lumilikha ng 
                    mga kwentong anino nitong nagdaang dalawampu’t limang taon. Sa darating pang dalawampu’t limang taon, asahan na ang ANINO SHADOWPLAY COLLECTIVE ay patuloy na 
                    tutuklas pa nang iba’t ibang paraan, at anyo ng pagtatanghal o ng mga kwadrong gaya nito sa walang humpay na pagpapatunay na walang hangganan ang imahinasyon. #
                </p>
                <p className='mb-4'>
                
                </p>
                <p className="font-bold italic mb-10">
                    Text by Avie Felix
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
                <Image className='h-[380px] object-cover object-top' src={'/agtayabun.png'} alt='agtayabun' width={1000} height={1000} />
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
