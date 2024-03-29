import Footer from '@/components/footer'
import SideBar from '@/components/sideBar'
import { IPage } from '@/types/pageTypes'
interface IProps {
    children: React.ReactNode
}

export const getPage = async () => {
    const res = await fetch(`${process.env.API_URI}/api/v1/page`, { cache: 'no-store' })
    return res.json()
}
export default async function MainLayout({ children }: IProps) {
    const pageInfo: IPage = await getPage()
    return (
        <>
            <SideBar
                pageInfo={pageInfo}
            />
            {children}
            <Footer />
        </>
    )
}
