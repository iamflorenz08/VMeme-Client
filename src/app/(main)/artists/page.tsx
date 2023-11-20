import Image from "next/image";


export default function ArtistsPage() {
    return (
        <main className="container mx-auto xl:px-20 xl:py-20 flex flex-col gap-10 duration-300 ">

            <div className="relative mx-5 md:mx-0">
                <input
                    className="border border-gray-300 w-96 h-11 rounded-full py-2 px-4 outline-none"
                    placeholder="Search..."
                    type="text" name="search" id="search" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 md:mx-0">
                {[1, 2, 3, 4, 5].map((value, index) => (
                    <div key={index} className="w-full relative flex">
                        <Image className="object-cover w-full max-h-[450px]" src={'/alaya.webp'} alt="artist" width={800} height={800} />
                        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 flex flex-col gap-5 items-center justify-center text-white ">
                            <h1 className="tracking-[10px] text-xl uppercase">Alaya Esguerra</h1>
                            <button className="px-6 py-2 border border-white">View arts</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-5 md:mx-0">
                {[1, 2, 3, 4, 5].map((value, index) => (
                    <button className="flex justify-center hover:scale-110 duration-300">
                        <div className="bg-white shadow-md p-5 w-fit">
                            <Image className="object-cover object-top w-[300px] max-h-[375px]" src={'/alaya.webp'} alt="artist" width={800} height={800} />
                            <h1 className="font-medium mt-3 text-left">Alaya Esguerra</h1>
                        </div>
                    </button>
                ))}
            </div> */}

        </main>
    )
}
