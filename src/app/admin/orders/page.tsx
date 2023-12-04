import formatStatus from "@/components/formatStatus"
import { IOrder } from "@/types/orderTypes"
import { IPainting } from "@/types/paintings"
import Link from "next/link"

interface IProps {
    searchParams: { page: number }
}

interface IOrderResult {
    totalDocuments: number,
    page: number
    data: Array<IOrder>
}


const getOrders = async (page?: number) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/order?page=${page}`, { cache: 'no-cache' })
    return res.json()
}

export default async function OrdersPage({ searchParams }: IProps) {
    let page = Number(searchParams.page) || 1
    const orders: IOrderResult = await getOrders(page)
    return (
        <main className='flex flex-col h-full p-8 gap-8'>
            <h1 className='font-medium text-4xl h-fit'>Orders Page</h1>
            <div className='flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg'>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        className='outline-none border border-gray rounded-full px-4 py-1.5'
                        placeholder='Search'
                    />
                </div>

                <table className='table-auto w-full border-t border-gray bg-red-200 '>
                    <thead className='text-center'>
                        <tr className='bg-primary text-white'>
                            <th className='py-5'>Order ID</th>
                            <th className='py-5'>Painting's name</th>
                            <th className='py-5'>Payment Method</th>
                            <th className='py-5'>Reference ID</th>
                            <th className='py-5'>Status</th>
                            <th className='py-5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {orders.data.map((order, index) => (
                            <tr key={index} className='odd:bg-white even:bg-primary-100'>
                                <td className='py-4'>{order._id}</td>
                                <td className='py-4'>
                                    {order.orderedPaintings.slice(0, 3).map((painting: IPainting, index: number) => (
                                        index >= order.orderedPaintings.length - 1 ? painting.name : painting.name + ', '
                                    ))}
                                    {order.orderedPaintings.length > 3 && '...'}
                                </td>
                                <td className='py-4'>Payment Method</td>
                                <td className='py-4'>{order.referenceID}</td>
                                <td className='py-4'>{formatStatus(order.status)}</td>
                                <td className='py-4'>Actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className='flex justify-between items-center'>
                    <span>Showing {((orders.page - 1) * 10) + 1} to {orders.page * 10} of {orders.totalDocuments} results</span>
                    <div className='flex gap-5'>
                        <Link
                            href={'/admin/orders?page=' + (page > 1 ? page - 1 : 1)}
                            className='bg-primary text-white px-5 py-2 rounded-md'>
                            Previous
                        </Link>
                        <Link
                            href={'/admin/orders?page=' + (page + 1)}
                            className='bg-primary text-white px-5 py-2 rounded-md'>
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
