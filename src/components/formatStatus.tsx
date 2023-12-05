import { IOrderStatus } from "@/types/orderTypes"

export default (status: string) => {
    if (status === IOrderStatus.Pending) {
        return <span className="bg-gray text-black text-opacity-50 px-2 py-1 rounded-md">{status}</span>
    }
    else if (status === IOrderStatus.Confirmed) {
        return <span className="bg-blue-500 text-white px-2 py-1 rounded-md">{status}</span>
    }
    else if (status === IOrderStatus.Completed) {
        return <span className="bg-green-500 text-white px-2 py-1 rounded-md">{status}</span>
    }
    else {
        return <span className="bg-red-500 text-white px-2 py-1 rounded-md">{status}</span>
    }
}
