'use client'
import { useState } from "react"
interface ICodingScheme {
    codingDay: string,
    lastDigit: Array<number>
}
const codingScheme: ICodingScheme[] = [
    {
        codingDay: 'monday',
        lastDigit: [1, 2]
    },
    {
        codingDay: 'tuesday',
        lastDigit: [3, 4]
    },
    {
        codingDay: 'wednesday',
        lastDigit: [5, 6]
    },
    {
        codingDay: 'thursday',
        lastDigit: [7, 8]
    },
    {
        codingDay: 'friday',
        lastDigit: [9, 0]
    }
]
interface IInput {
    vehicleType: string,
    plateNumber: string,
    day: string,
    time: string
}
interface ICodingMessage {
    message: string,
    isCoding: boolean
}
const exemptions: string[] = [
    'motorcycle',
    'ambulance',
    'fire truck',
    'police',
    'military',
    'tow truck',
    'medical'
]
export default function Home() {
    const [codingMessage, setCodingMessage] = useState<ICodingMessage>()
    const [input, setInput] = useState<IInput>({
        vehicleType: '',
        plateNumber: '',
        day: '',
        time: ''
    })
    const checkCoding = () => {
        let isCoding = true
        exemptions.forEach((value, index) => {
            if (input.vehicleType.toLocaleLowerCase().indexOf(value) >= 0) isCoding =
                false
        })
        if (!isCoding) return setCodingMessage({
            message: `${input.vehicleType} with Plate No. ${input.plateNumber} is EXEMPTED in coding scheme.`, isCoding: false
        })
        isCoding = false
        codingScheme.forEach((coding, index) => {
            const lastDigit = input.plateNumber.charAt(input.plateNumber.length - 1)
            if (coding.codingDay === input.day.toLocaleLowerCase()
                && coding.lastDigit.includes(Number(lastDigit))
                && (Number(input.time) >= 700 && Number(input.time) <= 1900)) {
                isCoding = true
            }
        })
        if (isCoding) {
            setCodingMessage({
                message: `${input.vehicleType} with Plate No. ${input.plateNumber} is CODING today.`, isCoding: true
            })
        }
        else {
            setCodingMessage({
                message: `${input.vehicleType} with Plate No. ${input.plateNumber} is NOT CODING today/during weekends.`, isCoding: false
            })
        }
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 gap-5">
            <h1 className='text-white tracking-tight text-2xl text-left'>Coding
                Checker</h1>
            <div className='bg-white flex flex-col gap-5 p-10 shadow-xl rounded-md w-[500px]'>
                <label id='vehicleType'>Vehicle Type</label>
                <input
                    type='text'
                    id='vehicleType'
                    value={input.vehicleType}
                    onChange={(e) => setInput({ ...input, vehicleType: e.target.value })}
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <label id='plateNumber'>Plate Number</label>
                <input
                    type='text'
                    id='plateNumber'
                    value={input.plateNumber}
                    onChange={(e) => setInput({ ...input, plateNumber: e.target.value })}
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <label id='day'>Day</label>
                <input
                    type='text'
                    id='day'
                    value={input.day}
                    onChange={(e) => setInput({ ...input, day: e.target.value })}
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <label id='time'>Time</label>
                <input
                    type='number'
                    id='time'
                    value={input.time}
                    onChange={(e) => setInput({ ...input, time: e.target.value })}
                    className='border-2 border-slate-900 rounded-md text-lg p-3 ' />
                <span className={`flex flex-wrap text-justify ${codingMessage?.isCoding ?
                    'text-red-700' : 'text-green-600'}`}>
                    {codingMessage?.message}
                </span>
                <button
                    onClick={checkCoding}
                    className='px-2 py-4 bg-slate-900 text-white rounded-md'>
                    Check
                </button>
            </div>
        </main>
    )
}
