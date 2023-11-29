import { useEffect } from "react"

interface IProps {
    isShow: boolean,
    showCallback: (value: boolean) => void
}

export default function PaintingsModal({ isShow, showCallback }: IProps) {


    useEffect(() => {

    }, [isShow])


    if (!isShow) return null
    return (
        <div className=" bg-black bg-opacity-50 absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center">
            <div className="bg-white w-[600px] p-5 rounded-lg flex flex-col gap-5">
                <h1 className="font-medium text-2xl">Details</h1>
                <form className='flex flex-col gap-5'>

                    <div className='border border-gray'></div>
                    <div className='flex justify-end gap-3 text-white'>
                        <button
                            type='submit'
                            className='px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 duration-300'>
                            Add
                        </button>
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
