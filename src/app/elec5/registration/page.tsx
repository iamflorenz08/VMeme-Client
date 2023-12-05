'use client'

import { useFormState, useFormStatus } from "react-dom"
import { checkSchedule } from "./action"


const initialState = {
    success: false,
    message: null
}

export default function page() {
    const { pending } = useFormStatus()
    const [status, formAction] = useFormState(checkSchedule, initialState)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 gap-5">
            <h1 className='text-white tracking-tight text-2xl text-left'>Motor Vehicle Registration Schedule </h1>
            <form action={formAction} className='bg-white flex flex-col gap-5 p-10 shadow-xl rounded-md w-[500px]'>
                <label id='vehicleType'>Vehicle Type</label>
                <input
                    type='text'
                    id='vehicleType'
                    name='vehicleType'
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <label id='plateNumber'>Plate Number</label>
                <input
                    type='text'
                    id='plateNumber'
                    name='plateNumber'
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <label id='set'>SET Certificate/Number </label>
                <input
                    type='text'
                    id='set'
                    name='set'
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <label id='tpl'>TPL Insurance Certificate/Number</label>
                <input
                    type='text'
                    id='tpl'
                    name='tpl'
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />

                <span className={`flex flex-wrap text-justify font-bold ${status.success ?
                    'text-green-600' : 'text-red-700 '}`}>
                    {status.message}
                </span>

                <button
                    type="submit"
                    className='px-2 py-4 bg-slate-900 text-white rounded-md'>
                    Check
                </button>
            </form>
        </main>
    )
}
