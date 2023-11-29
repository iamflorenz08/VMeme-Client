import Image from "next/image"
import { MdDelete } from '@react-icons/all-files/md/MdDelete'

export default function CartPage() {
    return (
        <main className='container mx-auto xl:px-20 duration-300'>
            <table className='table-auto w-full border-t border-gray bg-red-200 '>
                    <thead className='text-center'>
                        <tr className='bg-primary text-white'>
                            <th className='py-5'>Items</th>
                            <th className='py-5'>Subtotal</th>
                            <th className='py-5'>Remove</th>
                            
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {[1, 2].map((value, index) => (
                            <tr key={index} className='odd:bg-white even:bg-primary-100'>
                                <td className='py-4 pl-8'>
                                    <section className="px-5 md:px-0 flex flex-col lg:flex-row gap-5 lg:h-[150px]">
                                        <Image
                                            className="w-150 max-h-[150px] object-cover object-top"
                                            src={'/dead_vision.png'}
                                            alt="artist"
                                            width={150}
                                            height={150} 
                                        />
                                        <div className="max-h-full flex flex-col justify-center text-left">
                                            <span className="md:text-lg tracking-widest">Dead Vision</span>
                                            <span className="md:text-lg tracking-widest">Acrylic on canvas, 24 x 18 in., 2020</span>
                                            <span className="font-medium md:text-xl text-primary">₱100.00</span>
                                        </div>
                                    </section>
                                </td>
                                <td className='py-4'>₱100.00</td>
                                <td className='py-4'>
                                <button className="text-xl text-red-500"><MdDelete  size={40}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className='flex justify-between items-center py-5'>
                    <button className='bg-white text-black px-5 py-2 rounded-md border border-black'>Continue Shopping</button>

                    <div className='flex gap-5'>
                        <button className='bg-primary text-white px-5 py-2 rounded-md'>Checkout</button>
                    </div>
                </div>
        </main>
    );
}
