import Image from "next/image";
import { IoMdHeartEmpty } from '@react-icons/all-files/io/IoMdHeartEmpty'
import AddToCartButton from "./addToCartButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IPainting, PaintingStatus } from "@/types/paintings";

interface IProps {
    params: { paintingID: string }
}

const getPainting = async (paintingID: string) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/paintings/${paintingID}`, { cache: 'no-cache' })
    return res.json()
}

const isPaintingAddedToCart = async (userID: string, paintingID: string) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/cart/check?userID=${userID}&paintingID=${paintingID}`, { cache: 'no-cache' })
    if (!res.ok) return false
    return true
}

export default async function PaintingPage({ params }: IProps) {
    const session = await getServerSession(authOptions)
    const [painting, isAdded]: [IPainting, boolean] = await Promise.all(
        [
            getPainting(params.paintingID),
            session ? isPaintingAddedToCart(session.user._id, params.paintingID) : false
        ]
    )
    return (
        <main className="container mx-auto xl:px-20 flex flex-col gap-10 duration-300 mb-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
                <div className="w-full h-[600px]">
                    <Image
                        className="w-full h-[600px] object-cover flex justify-center"
                        src={painting.imageURL}
                        alt="painting"
                        height={500}
                        width={500}
                    />
                </div>

                <div className="w-full flex flex-col px-10 gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-2xl tracking-widest">{painting.name}</h1>
                        <h2 className="font-medium text-lg">₱{painting.price}</h2>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium">by {painting.artist?.name}</h3>
                        <p>{painting.description}</p>
                    </div>

                    <div className="flex gap-5">
                        {painting.status === PaintingStatus.Available && (
                            <AddToCartButton
                                isInCart={isAdded}
                                paintingID={params.paintingID}
                            />
                        )}

                        <button className="flex-none border px-10 py-4 duration-300 flex items-center gap-1 hover:bg-primary-200 hover:text-white">
                            Wishlist
                            <IoMdHeartEmpty size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}
