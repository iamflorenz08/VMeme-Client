'use client'
import Image from "next/image"
import { ICart } from "@/types/cartType"
import { useSession } from "next-auth/react"
import CheckOutButton from "./checkOutButton"
import DeleteItemInCart from "./deleteItemInCart"

interface IProps {
    itemsInCart: Array<ICart>
}
export default function CartTable({ itemsInCart }: IProps) {
    return (
        <>
            <div className="flex flex-col items-center">
                <table className='table-auto w-full border-t border-gray bg-red-200'>
                    <thead className='text-center'>
                        <tr className='bg-primary text-white'>
                            <th className='py-5'>Items</th>
                            <th className='py-5'>Subtotal</th>
                            <th className='py-5'>Remove</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {itemsInCart?.map((item, index) => (
                            <tr key={index} className='odd:bg-white even:bg-primary-100'>
                                <td className='py-4 pl-8'>
                                    <section className="px-5 md:px-0 flex flex-col lg:flex-row gap-5 lg:h-[150px]">
                                        <Image
                                            className="w-150 max-h-[150px] object-cover object-top"
                                            src={item.painting.imageURL}
                                            alt="artist"
                                            width={150}
                                            height={150}
                                        />
                                        <div className="max-h-full flex flex-col justify-center text-left">
                                            <span className="md:text-lg tracking-widest text-lg font-medium">{item.painting.name}</span>
                                            <span className="md:text-lg tracking-widest">{item.painting.description}</span>
                                            <span className="md:text-xl text-primary">₱{item.painting.price}</span>
                                        </div>
                                    </section>
                                </td>
                                <td className='py-4 font-medium text-lg'>₱{item.painting.price}</td>
                                <td className='py-4'>
                                    <DeleteItemInCart
                                        paintingID={item.painting._id}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {itemsInCart === undefined || itemsInCart.length <= 0 && (
                    <span className="flex w-full justify-center items-center h-[250px] text-2xl text-gray">
                        No items
                    </span>
                )}
            </div >

            <div className='flex justify-end mt-5 font-bold'>
                <span className="text-lg">Total: ₱{itemsInCart?.reduce((accumulator, currentItem) => accumulator += currentItem.painting.price, 0)}</span>
            </div>

            <CheckOutButton />
        </>

    )
}
