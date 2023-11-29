import { AiOutlineProfile } from '@react-icons/all-files/ai/AiOutlineProfile'
import { MdPendingActions } from '@react-icons/all-files/md/MdPendingActions'
import { HiMiniUserGroup } from '@react-icons/all-files/hi2/HiMiniUserGroup'
import { FaPaintbrush } from '@react-icons/all-files/fa6/FaPaintbrush'
interface IDashboard {
    label: string,
    count: number,
    icon: any,
    bgColor: string,
}

export default function DashboardPage() {

    const summaryList: IDashboard[] = [
        {
            label: 'Artists',
            count: 12,
            bgColor: 'bg-blue-500',
            icon: <FaPaintbrush className="text-black opacity-30" size={120} />
        },
        {
            label: 'Paintings',
            count: 12,
            bgColor: 'bg-pink-500',
            icon: <AiOutlineProfile className="text-black opacity-30" size={120} />
        },
        {
            label: 'Pending Orders',
            count: 5,
            bgColor: 'bg-green-500',
            icon: <MdPendingActions className="text-black opacity-30" size={120} />
        },
        {
            label: 'Registered Customers',
            count: 5,
            bgColor: 'bg-sky-500',
            icon: <HiMiniUserGroup className="text-black opacity-30" size={120} />
        }
    ]

    return (
        <main className='flex flex-col h-full p-8 gap-8'>
            <h1 className='font-medium text-4xl h-fit'>Dashboard Page</h1>
            <div className='grid grid-cols-3 gap-5 2xl:grid-cols-4'>

                {summaryList.map((data, index) => (
                    <div key={index} className={`${data.bgColor} flex px-8 py-10 justify-between items-center rounded-lg`}>
                        <div className='flex flex-col text-white font-medium'>
                            <h1 className='text-7xl'>{data.count}</h1>
                            <span className='text-2xl'>{data.label}</span>
                        </div>
                        <div className=''>
                            {data.icon}
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}
