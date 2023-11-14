import Footer from '@/components/footer'
import SideBar from '@/components/sideBar'
interface IProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: IProps) {
    return (
        <>
            <SideBar />
            {children}
            <Footer />
        </>
    )
}
