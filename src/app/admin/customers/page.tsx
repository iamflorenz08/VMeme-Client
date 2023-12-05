export default function CustomersPage() {
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
                            <th className='py-5'></th>
                            <th className='py-5'>Artist name</th>
                            <th className='py-5'>Painting's name</th>
                            <th className='py-5'>Price</th>
                            <th className='py-5'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-auto'>
                        {[1, 2, 3, 4, 5, 312, 321, 321, 3, 213, 12, 321].map((value, index) => (
                            <tr key={index} className='odd:bg-white even:bg-primary-100'>
                                <td className='py-4'>Artist image</td>
                                <td className='py-4'>Artist name</td>
                                <td className='py-4'>Painting's name</td>
                                <td className='py-4'>Price</td>
                                <td className='py-4'>Actions</td>
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
