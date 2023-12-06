
import Image from 'next/image'
import AdminSidebar from "./adminSidebar"
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import ProfileDropDown from './profileDropDown'
interface IProps {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: IProps) {
  const session = await getServerSession(authOptions)
  if (session?.user.role !== 'admin') redirect('/')
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
        <AdminSidebar />
      </nav>

      <div className="flex flex-col bg-[#F9FAFC] w-full">
        <ProfileDropDown
          fullName={session.user.fullName}
        />
        {children}
      </div>
    </section>
  )
}
