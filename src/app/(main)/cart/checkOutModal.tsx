import { ICart } from "@/types/cartType"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import CheckOutForm from "./checkOutForm"

interface IProps {
    isCheckOut: boolean,
    onCancel: () => void
}

export default function CheckOutModal({ isCheckOut, onCancel: cancel }: IProps) {
    const { data } = useSession()
    const [loading, setLoading] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<Array<ICart>>()

    useEffect(() => {
        const getItemsInCart = async () => {
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/v1/cart/${data?.user._id}`)
            const itemsInCart = await res.json()
            setLoading(false)
            if (!res.ok) return
            setCartItems(itemsInCart)
        }
        isCheckOut && getItemsInCart()
    }, [isCheckOut])


    if (!isCheckOut) return null
    return (
        <div className='absolute top-0 left-0 bg-black w-full min-h-screen max-h-fit bg-opacity-50 flex justify-center items-center overflow-auto'>
            {loading ? 'Loading' : (
                <div className='bg-white max-w-[600px] w-full p-5 rounded-lg'>
                    <h1 className='text-2xl font-medium'>Checkout Details</h1>
                    <CheckOutForm
                        onCancel={() => cancel()}
                        cartItems={cartItems}
                    />
                </div>
            )}
        </div>
    )
}
