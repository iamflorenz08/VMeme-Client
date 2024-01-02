import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { status } from "@/components/formatStatus";
import { IOrder } from "@/types/orderTypes";
import { getServerSession } from "next-auth";
import Link from "next/link";

const getOrders = async (userID: string | undefined) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/order/${userID}`)
    return res.json()
}

const getFormattedDate = (date: Date): string => {
    const newDate = new Date(date)
    const month = newDate.getMonth() < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1
    const day = newDate.getDate() < 10 ? '0' + (newDate.getDate() + 1) : newDate.getDate()
    const year = newDate.getFullYear()
    const hours = newDate.getHours() < 10 ? '0' + (newDate.getHours() + 1) : newDate.getHours()
    const minutes = newDate.getMinutes() < 10 ? '0' + (newDate.getMinutes() + 1) : newDate.getMinutes()
    return String(month + '/' + day + '/' + year + ' ' + hours + ':' + minutes)
}


export default async function OrderTrackingPage() {
    const session = await getServerSession(authOptions)
    const orders: Array<IOrder> = await getOrders(session?.user._id)

    return (
        <main className='container mx-auto xl:px-20 duration-300 mb-20'>
            <div className="flex flex-col">
                <table className='table-auto w-full border-t border-gray'>
                    <thead className='text-center'>
                        <tr className='bg-primary text-white'>
                            <th className='py-5'>Reference No.</th>
                            <th className='py-5'>Order Date</th>
                            <th className='py-5'>Status</th>
                            <th className='py-5'>Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {orders.map((order, index) => (
                            <tr key={index} className='odd:bg-white even:bg-primary-100'>
                                <td className='py-4'>{order.referenceID}</td>
                                <td className='py-4'>{getFormattedDate(order.createdAt)}</td>
                                <td className='py-4'>
                                    {status(order.status)}
                                </td>
                                <td className='py-4'>
                                    <Link href={'/order-tracking/' + order._id} className="text-primary underline" >View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {orders && orders.length <= 0 && (
                    <span className="h-[200px] flex justify-center items-center text-gray">
                        No order
                    </span>
                )}

            </div>

            <div className="sm:w-6" />
        </main>
    );
}
