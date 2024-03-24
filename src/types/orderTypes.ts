import { IPainting } from "./paintings";


export interface IOrder {
    _id: string,
    orderId?: string,
    user: string,
    email: string,
    phoneNumber: string,
    address: string,
    zipCode: number,
    referenceID: string,
    orderedPaintings: [IPainting] | any,
    status: string,
    createdAt: Date,
    confirmedDate?: Date,
    completedDate?: Date
}

export enum IOrderStatus {
    Pending = 'Pending',
    Confirmed = 'Confirmed',
    Completed = 'Completed',
    Declined = 'Declined'
}