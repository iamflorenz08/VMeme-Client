import Image from "next/image";

export default function page() {
    return (
        <main className="flex container mx-auto xl:px-20 my-20">
            <div className="max-w-full mx-auto gap-5 columns-3 space-y-5">
                <Image src={'/bente_singko.webp'} alt="exhibition" height={1000} width={1000} />
                <Image src={'/espiro_exh.webp'} alt="exhibition" height={1000} width={1000} />
                <Image src={'/floral_artist_manila_exh.webp'} alt="exhibition" height={1000} width={1000} />
                <Image src={'/tdcu.webp'} alt="exhibition" height={1000} width={1000} />
                <Image src={'/woku_up_like_this.webp'} alt="exhibition" height={1000} width={1000} />
            </div>

        </main>
    )
}
