import { IPage } from '@/types/pageTypes'
import PageForm from './pageForm'

export const getPage = async () => {
    const res = await fetch(`${process.env.API_URI}/api/v1/page`, { cache: 'no-store' })
    return res.json()
}
export default async function page() {
    const pageInfo: IPage = await getPage()

    return (
        <main className='flex flex-col h-full p-8 gap-8'>
            <h1 className='font-medium text-4xl h-fit'>Settings</h1>
            <PageForm
                pageInfo={pageInfo}
            />
        </main>
    )
}
