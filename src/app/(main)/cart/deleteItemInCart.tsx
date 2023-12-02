import { IoTrashOutline } from "@react-icons/all-files/io5/IoTrashOutline";
import { useFormState, useFormStatus } from "react-dom";
import { deleteItemInCart } from "./action";
import { IStatus } from "@/types/statusTypes";

interface IProps {
    paintingID: string
}

const initialState: IStatus = {
    success: false,
    message: null
}

export default function DeleteItemInCart({ paintingID }: IProps) {
    const { pending } = useFormStatus()
    const [status, formAction] = useFormState(deleteItemInCart, initialState)
 
    return (
        <form action={formAction}>
            <input type="hidden" name="paintingID" value={paintingID} />
            <button
                disabled={pending}
                type="submit"
                className="text-xl text-red-500">
                <IoTrashOutline size={25} />
            </button>
        </form>
    )
}
