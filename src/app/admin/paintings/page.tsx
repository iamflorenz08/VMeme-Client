
import AddPaintingsButton from "./addPaintingsButton";
import Link from "next/link";
import PaintingsTable from "./paintingsTable";
import { IPainting } from "@/types/paintings";
import SearchBar from "@/components/searchBar";

interface IProps {
    searchParams: { page: string, search: string }
}



interface IResult {
    totalDocuments: 2,
    page: 1,
    data: Array<IPainting>
}

const getPaintings = async (page: string | number, search: string) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/paintings?page=${page}${search ? '&search=' + search : ''}`, { cache: 'no-store' })
    return res.json()
}

export default async function PaintingsPage({ searchParams }: IProps) {
    let page = Number(searchParams.page) || 1
    const paintings: IResult = await getPaintings(page, searchParams.search)

    return (
        <main className='flex flex-col h-full p-8 gap-8 overflow-auto'>
            <h1 className='font-medium text-4xl h-fit'>Paintings Page</h1>
            <div className='flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg'>

                <div className='flex justify-between'>
                    <SearchBar
                        placeholder="Search painting name..."
                    />
                    <AddPaintingsButton />
                </div>

                <PaintingsTable
                    paintings={paintings.data}
                />


                <div className='flex justify-between items-center'>
                    <span>Showing {((paintings.page - 1) * 10) + 1} to {paintings.page * 10} of {paintings.totalDocuments} results</span>
                    <div className='flex gap-5'>
                        <Link
                            href={'/admin/paintings?page=' + (page > 1 ? page - 1 : 1)}
                            className='bg-primary text-white px-5 py-2 rounded-md'>
                            Previous
                        </Link>
                        <Link
                            href={'/admin/paintings?page=' + (page + 1)}
                            className='bg-primary text-white px-5 py-2 rounded-md'>
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
