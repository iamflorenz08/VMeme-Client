'use client'

import { IPage } from "@/types/pageTypes"
import { updateProfile } from "./action"
import ChangeImage from "./changeImage"

interface IProps {
    pageInfo: IPage
}

export default function PageForm({ pageInfo }: IProps) {
    return (
        <form action={updateProfile} className='flex flex-col gap-5 bg-white shadow-md p-5 rounded-lg w-fit'>
            <div className='flex justify-center'>
                <ChangeImage
                    imageURL={pageInfo.imageURL}
                />
            </div>
            <div className='flex items-center gap-4'>
                <label htmlFor="">Company's name: </label>
                <input
                    type="text"
                    className="px-3 py-3 h-fit outline-none rounded-md border border-gray"
                    name="name"
                    id="name"
                    defaultValue={pageInfo.name}
                    placeholder='Name...' />
            </div>
            <div className='flex justify-center'>
                <button className='bg-primary text-white px-4 py-2 w-fit rounded'>Save</button>
            </div>
        </form>
    )
}
