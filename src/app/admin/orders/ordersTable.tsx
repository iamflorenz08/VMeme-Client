'use client'
import { IOrder } from "@/types/orderTypes"
import formatStatus from "@/components/formatStatus"
import { IPainting } from "@/types/paintings"
import { useState } from "react"
import OrdersModal from "./ordersModal"

interface IProps {
    orders: Array<IOrder>
}

export default function OrdersTable({ orders }: IProps) {
    const [selectedOrder, setSelectedOrder] = useState<IOrder>()
    const [modal, setModal] = useState<boolean>(false)

    return (
        <>
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
                    {orders.map((order, index) => (
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
                            <td className='py-4'>
                                <button
                                    onClick={() => {
                                        setSelectedOrder(order)
                                        setModal(true)
                                    }}
                                    className="bg-primary hover:bg-primary-200 px-6 py-1 rounded-md text-white duration-300">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <OrdersModal
                order={selectedOrder}
                showCallback={(value) => setModal(value)}
                isShow={modal}
            />
        </>
    )
}
