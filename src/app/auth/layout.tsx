import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

interface IProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: IProps) {
    return (
        <section className="h-screen max-h-screen flex flex-col">
            <nav className="p-5 absolute top-0">
                <Link href={'/'}>
                    <Image src={'/vmeme_logo.jpg'} alt="logo" width={150} height={150} />
                </Link>
            </nav>
            {children}
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </section>
    )
}
