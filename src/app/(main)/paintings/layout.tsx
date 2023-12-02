'use client'
import { useRouter } from "next/navigation"
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'

interface IProps {
    children: React.ReactNode
}

export default function layout({ children }: IProps) {
    const router = useRouter()
    return (
        <>
            <nav className="container mx-auto xl:px-20 py-10">
                <button
                    className="flex items-center hover:text-gray duration-300"
                    onClick={() => {
                        router.back()
                    }}>
                    <IoIosArrowBack />
                    Back to artist
                </button>
            </nav>
            {children}
        </>
    )
}
