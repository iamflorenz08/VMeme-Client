import { IUser } from "@/types/userTypes"
import getFormattedDate from "@/utils/getFormattedDate"
import Image from "next/image"

const getUsers = async () => {
    const res = await fetch(`${process.env.API_URI}/api/v1/user`, { cache: 'no-cache' })
    return res.json()
}

interface IResult {
    totalDocuments: number,
    page: number,
    data: Array<IUser>
}

export default async function CustomersPage() {
    const users: IResult = await getUsers()

    return (
        <main className='flex flex-col h-full p-8 gap-8'>
            <h1 className='font-medium text-4xl h-fit'>Customers Page</h1>
            <div className='flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg'>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        className='outline-none border border-gray rounded-full px-4 py-1.5'
                        placeholder='Search'
                    />
                </div>

                <table className='table-auto w-full border-t border-gray bg-red-200 '>
                    <thead className='text-center'>
                        <tr className='bg-primary text-white'>
                            <th className='py-5'>Email</th>
                            <th className='py-5'>First name</th>
                            <th className='py-5'>Last name</th>
                            <th className='py-5'>Created at</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {users.data.map((user, index) => (
                            <tr key={index} className='odd:bg-white even:bg-primary-100'>
                                <td className='py-4'>{user.email}</td>
                                <td className='py-4'>{user.fullName.first}</td>
                                <td className='py-4'>{user.fullName.last}</td>
                                <td className='py-4'>{getFormattedDate(user.createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className='flex justify-between items-center'>
                    <span>Showing 1 to 10 of 97 results</span>
                    <div className='flex gap-5'>
                        <button className='bg-primary text-white px-5 py-2 rounded-md'>Previous</button>
                        <button className='bg-primary text-white px-5 py-2 rounded-md'>Next</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
