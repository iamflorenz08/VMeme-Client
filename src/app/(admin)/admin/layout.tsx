import Footer from '@/components/footer'
import Image from "next/image"
import ProfileForm from './Profile'
import DashboardForm from './Dashboard'



interface IProps {
    children: React.ReactNode
}

export default function layout({ children }: IProps) {
    return (
        <section className='bg-gray'>
            <div className="sm:h-6" />
            {children}
            <div className="sm:h-6" />
            <Footer/>
        </section>
    )
}
