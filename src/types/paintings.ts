import { IArtist } from "./artists";

export enum PaintingStatus {
    Available = 'Available',
    Sold = 'Sold'
}

export interface IPainting {
    _id: string,
    name: string,
    description: string,
    imageURL: string,
    artist: IArtist,
    type: string,
    price: number,
    status: string
}