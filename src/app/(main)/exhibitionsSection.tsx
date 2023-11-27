import Image from 'next/image'
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'
export default function ExhibitionsSection() {
    return (
        <section className='container mx-auto xl:px-20 duration-300'>
            <div className="relative">
                <Image className="bg-red-200 w-full min-h-[300px] object-cover" src={"/bg-exhi.png"} alt="background" width={1000} height={1000} />
                <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white z-10 gap-8">
                    <h1 className="font-medium tracking-[0.5em] text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-center uppercase">
                        CONTEMPORARY ART GALLERY
                    </h1>
                    <button className="border-white border hover:border-opacity-80 px-4 py-2 duration-300">Learn more</button>
                </div>
                <div className="bg-black absolute top-0 w-full h-full opacity-75"></div>
            </div>

            <button className='group hover:opacity-80 font-black px-3 py-2 my-8 mx-5 md:mx-0 text-3xl xl:text-4xl 2xl:text-5xl text-primary border-l-8 border-primary tracking-widest flex duration-300'>
                <h1>Exhibitions</h1>
                <span className='opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-300'>
                    <MdNavigateNext />
                </span>
            </button>

            <div className='flex flex-col gap-20 justify-center px-5 md:px-0  items-center'>

                <div className='flex flex-col lg:flex-row-reverse items-center gap-5  w-full 2xl:gap-10'>
                    <div className='lg:w-full'>
                        <Image src={'/espiro_exh.webp'} alt='espiro' width={1000} height={1000} />
                    </div>
                    <div className='flex flex-col gap-3 xl:gap-5 2xl:gap-7 lg:w-3/4'>
                        <h1 className='font-bold text-2xl 2xl:text-3xl'>Espiro</h1>
                        <p className='text-justify font-light 2xl:text-lg'>
                            featuring eight outstanding filipino artists sharing their minutest expression and impression of breath. In various approaches, these contemporary artists take us to moments of recalling, thinking, feeling, paying tribute, imagining, simply honoring the opportunity of breathing, and celebrating spaces and time to breathe as spaces and time to be more and more alive.
                        </p>
                        <div className='text-center mt-5 lg:text-left'>
                            <button className='flex items-center px-4 py-2 rounded-md w-fit bg-primary hover:bg-primary-200 text-white duration-300 font-semibold'>
                                Read More
                                <span className='text-2xl'><MdNavigateNext /></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-5 w-full 2xl:gap-10'>
                    <div className='lg:w-full'>
                        <Image src={'/floral_artist_manila_exh.webp'} alt='espiro' width={600} height={1000} />
                    </div>
                    <div className='flex flex-col gap-3 xl:gap-5 2xl:gap-7'>
                        <h1 className='font-bold text-2xl 2xl:text-3xl'>Flourish</h1>
                        <p className='text-justify font-light 2xl:text-lg'>
                            Foral Artists Manila (FAM), the country’s first all-women group of visual artists creating floral artworks, opens their 10th exhibit entitled FLOURISH.  FAM, formed in 2019 by Addie Cukingnan and Remy Boquiren, is a mix of mid-career and seasoned artists known for their individual style of floral compositions. In FLOURISH group exhibit, FAM members celebrate a garland of women’s artistry, skills and creativity put together in a colorful arrangement.
                        </p>
                        <div className='text-center mt-5 lg:text-left'>
                            <button className='flex items-center px-4 py-2 rounded-md w-fit bg-primary hover:bg-primary-200 text-white duration-300 font-semibold'>
                                Read More
                                <span className='text-2xl'><MdNavigateNext /></span>
                            </button>
                        </div>
                    </div>
                </div>

                <button className='w-fit text-primary text-xl font-bold border-b-2 border-primary duration-300 hover:opacity-80 hover:border-opacity-80'>View all</button>
            </div>
        </section>
    )
}
