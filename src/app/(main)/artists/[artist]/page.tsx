import Image from "next/image"

interface IProps {
    params: { artist: string }
}

export default function ArtistPage({ params: { artist } }: IProps) {
    return (
        <main className="container mx-auto xl:px-20 md:my-20 w-full flex flex-col gap-20 mb-10">
            <section className="px-5 md:px-0 flex flex-col lg:flex-row gap-5 lg:h-[450px]">
                <Image
                    className="w-full max-h-[450px] object-cover object-top"
                    src={'/alaya.webp'}
                    alt="artist"
                    width={1000}
                    height={500} />

                <div className="w-full max-h-full flex flex-col justify-center">
                    <h1 className="text-4xl xl:text-5xl tracking-wide flex flex-wrap border-primary border-l-[10px]  py-4 font-[400] h-fit justify-center">
                        Alaya Esguerra
                    </h1>
                    <p className="text-justify w-full overflow-y-auto">
                        is a curator, teacher, writer, multi-disciplinary artist, an
                        is what you would call a young emerging artist mainly because she is
                        young, but her experience in creating sound art, music, painting,
                        sculpture and illustration spans 11 years. Training formally in several
                        disciplines – music, dance and visual arts, Alaya has participated in
                        more than 20 group exhibitions and art fairs since the age of 5. Her
                        current art practice revolves around theinterdisciplinary aesthetics of
                        sound/music and visual expressions in sculpture and painting. She
                        perceives art production as a window to have a bigger understanding
                        of the world one artwork at a time. Disciplined, inquisitive and
                        observant, Alaya’s works are filled with elements of popular culture,
                        surrealist images, and a tug-of-war of bright and subdued tones.


                    </p>
                </div>
            </section>

            <section className="px-5 md:px-0 flex flex-col gap-10">
                <h1 className="text-4xl xl:text-5xl  tracking-wide flex flex-wrap border-primary border-l-[10px] justify-center lg:pl-3 lg:justify-start py-4 font-[400]">
                    Artworks
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="bg-gray p-5 2xl:p-7">
                                <Image
                                    className="w-full min-h-[250px] max-h-[500px] border-[10px] border-black border-opacity-90 object-cover"
                                    src={'/dead_vision.png'}
                                    alt="artwork"
                                    width={200}
                                    height={200} />
                            </div>
                            <div className="flex flex-col">
                                <span className="md:text-lg tracking-widest">Dead Vision</span>
                                <span className="font-medium md:text-xl text-primary">₱100.00</span>
                            </div>

                        </div>

                    ))}

                </div>
            </section>

        </main>
    )
}
