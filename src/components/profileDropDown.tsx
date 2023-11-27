'use client'
import useDropDown from '@/hooks/useDropDown'
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt'
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut'
import { useRef } from 'react'
import { signOut } from 'next-auth/react'
export default function ProfileDropDown() {
    const ref = useRef<any>()
    const [toggle, setToggle] = useDropDown(false, ref)
    return (
        <div ref={ref} className="relative flex">
            <button
                onClick={() => setToggle(value => !value)}
                className="text-xl bg-opacity-0 hover:bg-opacity-40 duration-300 flex justify-center items-center bg-gray w-10 h-10 rounded-full">
                <FaUserAlt />
            </button>

            <div className={`absolute bg-white drop-shadow-md right-0 top-10 p-2 w-[250px] text-left rounded-lg z-50 duration-200 opacity-0 ${toggle && 'opacity-100'}`}>
                <button
                    onClick={() => signOut()}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray rounded-lg duration-300">
                    <span className="flex items-center justify-center rounded-full"> <FiLogOut /></span>
                    Log out
                </button>
            </div>
        </div>
    )
}
