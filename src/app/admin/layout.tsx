'use client'
import { INavigation } from "@/components/sideBar"
import { useSelectedLayoutSegment } from "next/navigation"
import { MdDashboard } from '@react-icons/all-files/md/MdDashboard'
import { RiBubbleChartFill } from '@react-icons/all-files/ri/RiBubbleChartFill'
import { FaUserAstronaut } from '@react-icons/all-files/fa/FaUserAstronaut'
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush'
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown'
import { IoCart } from '@react-icons/all-files/io5/IoCart'
import Link from "next/link"
import Image from 'next/image'
import { HiMiniUserGroup } from "@react-icons/all-files/hi2/HiMiniUserGroup"

interface IProps {
  children: React.ReactNode
}


export default function AdminLayout({ children }: IProps) {
  const segment = useSelectedLayoutSegment()
  const navigationList: INavigation[] = [
    {
      label: 'Dashboard',
      href: '/admin/dashboard',
      current: segment === 'dashboard' || segment === null || segment === undefined,
      icon: <MdDashboard size={28} />
    },
    // {
    //   label: 'Exhibitions',
    //   href: '/admin/exhibitions',
    //   current: segment === 'exhibitions',
    //   icon: <RiBubbleChartFill size={28} />
    // },
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
    }
  ]

  return (
    <section className="flex w-full h-screen max-h-screen">

      <nav className="min-w-[280px] max-w-[280px] bg-white shadow-lg flex flex-col gap-10 z-50">
        <div className="flex justify-start ">
          <Image
            className="w-full"
            src={'/vmeme_logo.jpg'}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
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
      </nav>
            
      <div className="flex flex-col bg-[#F9FAFC] w-full">
        <nav className="bg-white p-8 flex justify-end shadow-md z-40">
          <div className="flex items-center gap-3">
            Sabrina Nieva
            <FaAngleDown />
          </div>
        </nav>
        {children}
      </div>
    </section>
  )
}
