import Footer from '@/components/footer'
import Image from "next/image"



interface IProps {
    children: React.ReactNode
}

export default function layout({ children }: IProps) {
    return (
        <section>
            <nav className="py-10 px-5 md:px-0 flex justify-between items-center container mx-auto">
                <div>
                    <Image src={"/vmeme_logo.jpg"} alt="logo" width={150} height={32} />
                </div>
                <div className="flex items-center gap-5">
                    <button>Logout</button>
                </div>
            </nav>
            {children}
            <Footer />
        </section>
    )
}
