'use client'
import useDropDown from "@/hooks/useDropDown"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut"
import { signOut } from "next-auth/react"
import { useRef } from "react"

interface IProps {
    fullName: {
        first: string,
        last: string
    }
}

export default function ProfileDropDown({ fullName }: IProps) {
    const ref = useRef<any>()
    const [toggle, setToggle] = useDropDown(false, ref)
    return (
        <nav className="bg-white p-8 flex justify-end shadow-md z-40 relative">
            <button
                onClick={() => setToggle(state => !state)}
                className="flex items-center gap-3">
                {fullName.first} {fullName.last}
                <FaAngleDown />
            </button>

            <div ref={ref} className="relative">
                <div className={`absolute bg-white drop-shadow-md right-0 top-10 p-2 w-[250px] text-left rounded-lg z-50 duration-200 opacity-0 ${toggle && 'opacity-100'}`}>
                    <button
                        onClick={() => signOut()}
                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray rounded-lg duration-300">
                        <span className="flex items-center justify-center rounded-full"> <FiLogOut /></span>
                        Log out
                    </button>
                </div>
            </div>

        </nav>
    )
}
