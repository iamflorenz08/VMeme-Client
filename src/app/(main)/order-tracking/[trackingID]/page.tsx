import { PiListMagnifyingGlassBold } from '@react-icons/all-files/pi/PiListMagnifyingGlassBold'
import { AiOutlineFileDone } from '@react-icons/all-files/ai/AiOutlineFileDone'
import { MdOutlineDoneOutline } from '@react-icons/all-files/md/MdOutlineDoneOutline'
import { IOrder } from '@/types/orderTypes';
import { IPainting } from '@/types/paintings';
import Image from 'next/image';

interface IProps {
  params: { trackingID: string }
}

// Sample data for table updates
const updatesData = [
  { date: '11/29/2023 - 8:31PM', location: 'Taguig City', event: 'Order Placed' },
  { date: '11/29/2023 - 8:31PM', location: 'Taguig City', event: 'Order Confirmed' },
  { date: '11/29/2023 - 8:31PM', location: 'Taguig City', event: 'Order Completed' },
  // Add more rows as needed
];

const getOrder = async (orderID: string | undefined) => {
  const res = await fetch(`${process.env.API_URI}/api/v1/order/detail/${orderID}`, { cache: 'no-cache' })
  return res.json()
}

export default async function TrackingIDPage({ params }: IProps) {
  const order: IOrder = await getOrder(params.trackingID)

  // Dynamic array of steps based on the number of rows in updatesData
  const steps = updatesData.map((update, index) => ({
    label: update.event,
    date: update.date,
    progress: `${((index + 1) / updatesData.length) * 100}%`,
  }));

  return (
    <main className='container mx-auto xl:px-20 duration-300 mb-20'>
      <h1 className='font-medium text-2xl text-center'>Order Details - abc</h1>

      {/* Stepper and Progress Bar */}
      <div className="flex items-center flex-col justify-center relative">
        {/* Stepper Circles and Connections */}

        <ul className="flex justify-between items-center w-full px-7 my-2" >
          <li className='flex items-center w-full after:w-full after:content-[""] after:border-4 after:border-primary after:items-center'>
            <span className='text-white bg-primary p-4 rounded-full flex items-center justify-center'>
              <PiListMagnifyingGlassBold size={25} />
            </span>
          </li>
          <li className='flex items-center w-full after:w-full after:content-[""] after:border-4 after:border-gray after:items-center'>
            <span className='text-white bg-primary p-4 rounded-full flex items-center justify-center'>
              <AiOutlineFileDone size={25} />
            </span>
          </li>
          <li className='flex items-center'>
            <span className='text-white bg-primary p-4 rounded-full flex items-center justify-center'>
              <MdOutlineDoneOutline size={25} />
            </span>
          </li>
        </ul>

        {/* Stepper Labels */}
        <div className="flex w-full justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-xs text-gray-500">{step.date}</span>
              <span className="text-sm">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Items Table */}
      <h1 className='font-medium text-2xl my-4'>Items:</h1>
      <table className='table-auto w-full border-t border-gray bg-red-200'>
        <thead className='text-center'>
          <tr className='bg-primary text-white'>
            <th className='py-5'></th>
            <th className='py-5'>Painting</th>
            <th className='py-5'>Artist</th>
            <th className='py-5'>Price</th>
          </tr>
        </thead>
        <tbody className='text-center overflow-auto'>
          {order.orderedPaintings.map((painting: IPainting, index: number) => (
            <tr key={index} className={'odd:bg-white even:bg-primary-100'}>
              <td className='py-4 flex justify-center'>
                <Image
                  className='w-12 h-12 object-cover rounded-full'
                  src={painting.imageURL} alt='painting'
                  height={48}
                  width={48} />
              </td>
              <td className='py-4'>{painting.name}</td>
              <td className='py-4'>{painting.artist.name}</td>
              <td className='py-5'>₱{painting.price}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </main>
  );
}
