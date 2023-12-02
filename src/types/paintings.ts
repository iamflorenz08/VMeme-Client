import { IArtist } from "./artists";

export interface IPainting {
    _id: string,
    name: string,
    description: string,
    imageURL: string,
    artist: IArtist,
    type: string,
    price: number
}