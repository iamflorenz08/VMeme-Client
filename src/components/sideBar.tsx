'use client'
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline'
import { useState } from "react"
import { signIn, signOut, useSession } from 'next-auth/react'
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline'
import ProfileDropDown from "./profileDropDown"
interface INavigation {
    label: string,
    href: string,
    current: boolean,
    icon?: any
}

export default function SideBar() {
    const segment = useSelectedLayoutSegment()
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    const { status } = useSession()

    const navigations: INavigation[] = [
        {
            label: 'Home',
            href: '/',
            current: segment === 'home' || segment === null
        },
        {
            label: 'Exhibitions',
            href: '/exhibitions',
            current: segment === 'exhibitions',
            icon: <IoChevronDownOutline />
        },
        {
            label: 'Artists',
            href: '/artists',
            current: segment === 'artists'
        },
        {
            label: 'About',
            href: '/about',
            current: false
        }
    ]

    return (
        <>
            <nav className="py-10 px-5 md:px-0 flex justify-between items-center container mx-auto">
                <Link href={'/'}>
                    <Image src={"/vmeme_logo.jpg"} alt="logo" width={150} height={32} />
                </Link>

                <div className="hidden gap-10 lg:gap-32 2xl:gap-40 items-center md:flex">
                    <ul className="flex items-center gap-10 text-center">
                        {navigations.map((navigation, index) => (
                            <li key={index}
                                className={`flex items-center gap-2 font-light`}>
                                <Link href={navigation.href} className={`border-b-2 border-t-2 border-transparent 
                                hover:border-b-primary spacing tracking-widest 
                                duration-300 ${navigation.current && 'border-b-primary'}`}>
                                    {navigation.label}
                                </Link>
                                {navigation.icon}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-center gap-5 ">
                    <button
                        className="text-2xl bg-opacity-0 hover:bg-opacity-40 duration-300 flex justify-center items-center bg-gray w-10 h-10 rounded-full">
                        <IoCartOutline />
                    </button>

                    {status === 'unauthenticated' && (<button onClick={() => signIn()}>Login</button>)}
                    {status === 'authenticated' && (<ProfileDropDown />)}

                    <button
                        className="text-4xl  md:hidden"
                        onClick={() => setIsNavOpen(value => !value)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </nav>

            {/* smaller screen navbar */}
            {isNavOpen && (
                <nav className='flex flex-col gap-16 md:hidden justify-center items-center py-5 fixed top-0 bg-primary-100 w-full h-full z-50'>
                    <button
                        className="absolute top-14 right-6 text-3xl"
                        onClick={() => setIsNavOpen(value => !value)}>
                        <IoMdClose />
                    </button>
                    <div>
                        <Image src={"/vmeme_logo.jpg"} alt="logo" width={150} height={32} />
                    </div>

                    <div className="flex flex-col gap-16 items-center">
                        <ul className="flex flex-col gap-16 text-center">
                            {navigations.map((navigation, index) => (
                                <li key={index}
                                    className={`border-b-2 border-t-2 border-transparent 
                            hover:border-b-primary spacing tracking-widest 
                            duration-300 ${navigation.current && 'border-b-primary'}`}>

                                    <Link href={navigation.href}>
                                        {navigation.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}

        </>
    )
}
