import Image from "next/image"
import { MdDelete } from '@react-icons/all-files/md/MdDelete'

export default function OrderTrackingPage() {
    return (
        <main className='container mx-auto xl:px-20 duration-300'>
            <table className='table-auto w-full border-t border-gray bg-red-200'>
                <thead className='text-center'>
                    <tr className='bg-primary text-white'>
                        <th className='py-5'>Reference No.</th>
                        <th className='py-5'>Order Data</th>
                        <th className='py-5'>Status</th>
                        <th className='py-5'>Details</th>
                    </tr>
                </thead>
                <tbody className='text-center overflow-auto'>
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <tr key={index} className='odd:bg-white even:bg-primary-100'>
                            <td className='py-4'>Reference No.</td>
                            <td className='py-4'>Order Data</td>
                            <td className='py-4'>Status</td>
                            <td className='py-4'>
                                    <p className="text-primary underline" >View Details</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="sm:w-6" />
        </main>
    );
}
