'use client'
import { MdArrowForwardIos } from '@react-icons/all-files/md/MdArrowForwardIos'
import { signIn, useSession } from 'next-auth/react'
import { useFormState, useFormStatus } from 'react-dom'
import { addToCart, removeToCart } from './action'
import { IStatus } from '@/types/statusTypes'
import { useEffect, useState } from 'react'

interface IProps {
    paintingID: string,
    isInCart: boolean
}


const initialState: IStatus = {
    success: false,
    message: null
}

export default function AddToCartButton({ paintingID, isInCart }: IProps) {
    const { status: sessionStatus, data } = useSession()
    const { pending } = useFormStatus()
    const [status, formAction] = useFormState(addToCart, initialState)
    const [removeStatus, deleteFormAction] = useFormState(removeToCart, initialState)
    const [isAdded, setIsAdded] = useState<boolean>(isInCart)

    useEffect(() => {
        if (status.success) {
            setIsAdded(true)
            status.success = false
            status.message = null
        }

        if (removeStatus.success) {
            setIsAdded(false)
            removeStatus.success = false
            removeStatus.message = null
        }
    }, [status, removeStatus])

    return (
        <form action={isAdded ? deleteFormAction : formAction} className='flex-grow '>
            <input type="hidden" name="paintingID" value={paintingID} />
            <button
                disabled={pending || sessionStatus === 'loading'}
                type={sessionStatus === 'authenticated' ? 'submit' : 'button'}
                onClick={() => sessionStatus === 'unauthenticated' && signIn()}
                className="w-full bg-primary hover:bg-primary-200 text-white px-10 py-4 duration-300 flex items-center justify-center gap-1">
                {pending || sessionStatus === 'loading' ? ('Loading') : (isAdded ? 'Remove to cart' : 'Add to cart')}
                <MdArrowForwardIos />
            </button>
        </form >
    )
}
