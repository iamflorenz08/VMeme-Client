import { useFormState, useFormStatus } from "react-dom"
import { useEffect } from "react"
import { IOrder } from "@/types/orderTypes"
import { updateStatus } from "./action"
interface IProps {
    isShow: boolean,
    showCallback: (value: boolean) => void,
    order: IOrder | undefined
}

export interface IState {
    [key: string]: any,
    success: boolean,
    message: string | null,
    paintingName?: string | null,
    description?: string | null,
    artistId?: string | null,
    paintingType?: string | null,
    price?: string | null

}
const initialState: IState = {
    success: false,
    message: null,
}

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={pending}
            type='submit'
            className='px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 duration-300'>
            {pending ? 'Loading' : 'Save'}
        </button>
    )
}

export default function OrdersModal({ isShow, showCallback, order }: IProps) {
    const [status, formAction] = useFormState(updateStatus, initialState)
    
    useEffect(() => {
        if (status.success) showCallback(false)
    }, [status])

    if (!isShow) return null
    return (
        <div className=" bg-black bg-opacity-50 absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center">
            <div className="bg-white w-[600px] p-5 rounded-lg flex flex-col gap-5">
                <h1 className="font-medium text-2xl">Details</h1>
                <form action={formAction} className='mt-5 flex flex-col gap-3'>
                    <input type="hidden" name="orderID" value={order?._id} />
                    <input
                        type="email"
                        name="email"
                        value={order?.email}
                        readOnly
                        className='p-3 w-full text-lg border border-gray rounded-md outline-primary'
                        placeholder='Email' />

                    <input
                        type="number"
                        name="phoneNumber"
                        value={order?.phoneNumber}
                        readOnly
                        className='p-3 w-full text-lg border border-gray rounded-md outline-primary'
                        placeholder='Phone number' />
                    <div className='flex gap-3'>
                        <input
                            type="text"
                            name="address"
                            value={order?.address}
                            readOnly
                            className='w-full p-3 text-lg border border-gray rounded-md outline-primary'
                            placeholder='Address' />

                        <input
                            type="number"
                            name="zipCode"
                            value={order?.zipCode}
                            readOnly
                            className='w-[150px] p-3 text-lg border border-gray rounded-md outline-primary'
                            placeholder='Zip Code' />
                    </div>

                    <input
                        type="text"
                        name="referenceID"
                        value={order?.referenceID}
                        readOnly
                        className='p-3 w-full text-lg border border-gray rounded-md outline-primary'
                        placeholder='Reference ID' />


                    <h2 className="mt-5 font-medium text-lg">Status</h2>
                    <div className="flex gap-5">
                        <div className="flex gap-2">
                            <input type="radio" name="status" id="pending" value={'Pending'} defaultChecked={order?.status === 'Pending'} />
                            <label htmlFor="pending">Pending</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="status" id="confirmed" value={'Confirmed'} defaultChecked={order?.status === 'Confirmed'} />
                            <label htmlFor="confirmed">Confirmed</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="status" id="completed" value={'Completed'} defaultChecked={order?.status === 'Completed'} />
                            <label htmlFor="completed">Completed</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="status" id="declined" value={'Declined'} defaultChecked={order?.status === 'Declined'} />
                            <label htmlFor="declined">Declined</label>
                        </div>
                    </div>
                    {/* DIVIDER */}
                    <div className='border border-gray'></div>
                    <div className='flex justify-end gap-3 text-white'>
                        <SubmitButton />
                        <button
                            onClick={() => showCallback(false)}
                            type='button'
                            className='px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 duration-300'>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
