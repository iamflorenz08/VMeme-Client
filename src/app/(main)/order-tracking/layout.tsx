'use client'
import BackNav from "@/components/backNav"
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack"
import { useRouter } from "next/navigation"

interface IProps {
    children: React.ReactNode
}
export default function layout({ children }: IProps) {
    const router = useRouter()
    return (
        <>
            <BackNav
                label="Back"
            />
            {children}
        </>
    )
}
