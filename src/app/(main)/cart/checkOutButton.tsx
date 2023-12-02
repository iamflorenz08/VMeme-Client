import { useState } from 'react'
import CheckOutModal from './checkOutModal'
import Link from 'next/link'

export default function CheckOutButton() {
    const [checkOut, setCheckOut] = useState<boolean>(false)

    return (
        <div className='flex justify-between items-center py-5'>
            <Link
                href={'/order-tracking'}
                type="button"
                className='bg-white text-black px-5 py-2 rounded-md border border-black'>
                View orders
            </Link>

            <div className='flex gap-5'>
                <button
                    onClick={() => setCheckOut(true)}
                    type="button"
                    className='bg-primary text-white px-5 py-2 rounded-md'>Checkout</button>
            </div>

            <CheckOutModal
                isCheckOut={checkOut}
                onCancel={() => setCheckOut(false)}
            />
        </div>
    )
}
