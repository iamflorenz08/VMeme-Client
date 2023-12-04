'use client'
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack"
import { useRouter } from "next/navigation"

interface IProps {
    label: string
}
export default function BackNav({ label }: IProps) {
    const router = useRouter()
    return (
        <nav className="container mx-auto xl:px-20 py-10">
            <button
                className="flex items-center hover:text-gray duration-300"
                onClick={() => {
                    router.back()
                }}>
                <IoIosArrowBack />
                {label}
            </button>
        </nav>
    )
}
