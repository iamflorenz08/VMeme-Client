import { IOrderStatus } from "@/types/orderTypes"

export default (status: string) => {
    if (status === IOrderStatus.Pending) {
        return <span className="bg-gray text-black text-opacity-50 px-2 py-1 rounded-md">{status}</span>
    }
}
