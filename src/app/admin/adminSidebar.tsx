'use client'
import Link from 'next/link'
import { INavigation } from "@/components/sideBar"
import { useSelectedLayoutSegment } from "next/navigation"
import { MdDashboard } from '@react-icons/all-files/md/MdDashboard'
import { FaUserAstronaut } from '@react-icons/all-files/fa/FaUserAstronaut'
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush'
import { IoCart } from '@react-icons/all-files/io5/IoCart'
import { HiMiniUserGroup } from "@react-icons/all-files/hi2/HiMiniUserGroup"
import { IoMdSettings } from '@react-icons/all-files/io/IoMdSettings'

export default function AdminSidebar() {
    const segment = useSelectedLayoutSegment()
    const navigationList: INavigation[] = [
        {
            label: 'Dashboard',
            href: '/admin/dashboard',
            current: segment === 'dashboard' || segment === null || segment === undefined,
            icon: <MdDashboard size={28} />
        },
        {
            label: 'Artists',
            href: '/admin/artists',
            current: segment === 'artists',
            icon: <FaUserAstronaut size={28} />
        },
        {
            label: 'Paintings',
            href: '/admin/paintings',
            current: segment === 'paintings',
            icon: <FaPaintBrush size={28} />
        },
        {
            label: 'Orders',
            href: '/admin/orders',
            current: segment === 'orders',
            icon: <IoCart size={28} />
        },
        {
            label: 'Customers',
            href: '/admin/customers',
            current: segment === 'customers',
            icon: <HiMiniUserGroup size={28} />
        },
        {
            label: 'Settings',
            href: '/admin/settings',
            current: segment === 'settings',
            icon: <IoMdSettings size={28} />
        }
    ]
    return (
        <ul className="w-full flex flex-col gap-2 text-lg font-medium text-[#BDBDBD]">
            {navigationList.map((navigation, index) => (
                <li key={index} className={`flex items-center justify-center ${navigation.current && '!border-primary'} border-l-[5px] border-white`}>
                    <Link className="pl-10 py-5 w-full flex items-center gap-3 " href={navigation.href}>
                        <span className={`${navigation.current && 'text-primary'}`}>{navigation.icon}</span>
                        <span className={`${navigation.current && 'text-black'}`}>{navigation.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
