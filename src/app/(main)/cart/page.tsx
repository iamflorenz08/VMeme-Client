
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOption";
import { ICart } from "@/types/cartType";
import CartTable from "./cartTable";

const getItemsInCart = async (userID: string) => {
    const res = await fetch(`${process.env.API_URI}/api/v1/cart/${userID}`, { cache: 'no-store' })
    return res.json()
}

export default async function CartPage() {
    const session = await getServerSession(authOptions)
    const itemsInCart: ICart[] = session && await getItemsInCart(session?.user._id)

    return (
        <main className='container mx-auto xl:px-20 duration-300 max-h-full overflow-auto'>
            <CartTable
                itemsInCart={itemsInCart || []}
            />
        </main>
    );
}
