import { useFormState, useFormStatus } from "react-dom";
import ArtistNamesInput from "./artistNamesInput";
import ImagePreview from "./imagePreview";
import { addPaintings, updatePainting } from "./action";
import { useEffect } from "react";
import { IPainting } from "@/types/paintings";
interface IProps {
  isShow: boolean;
  showCallback: (value: boolean) => void;
  painting?: IPainting;
}

export interface IState {
  [key: string]: any;
  success: boolean;
  message: string | null;
  paintingName?: string | null;
  description?: string | null;
  artistId?: string | null;
  paintingType?: string | null;
  price?: string | null;
}
const initialState: IState = {
  success: false,
  message: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 duration-300"
    >
      {pending ? "Loading" : "Add"}
    </button>
  );
};

export default function PaintingsModal({
  isShow,
  showCallback,
  painting,
}: IProps) {
  const [status, formAction] = useFormState(addPaintings, initialState);
  const [updateStatus, updateAction] = useFormState(
    updatePainting,
    initialState
  );
  useEffect(() => {
    if (status.success || updateStatus.success) {
      status.success = false;
      status.message = null;
      updateStatus.success = false;
      updateStatus.message = null;
      showCallback(false);
    }
  }, [status, updateStatus]);

  if (!isShow) return null;
  return (
    <div className=" bg-black bg-opacity-50 absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-5 rounded-lg flex flex-col gap-5">
        <h1 className="font-medium text-2xl">Details</h1>
        <form
          action={painting ? updateAction : formAction}
          className="flex flex-col gap-5"
        >
          <input type="hidden" name="paintingId" defaultValue={painting?._id} />
          <div className="flex justify-between gap-5 ">
            <div className="flex flex-col gap-5 w-full ">
              <input
                type="text"
                className="min-w-full px-3 py-3 outline-none rounded-md border border-gray"
                name="paintingName"
                id="paintingName"
                defaultValue={painting?.name}
                placeholder="Painting's Name"
              />

              <textarea
                placeholder="Description"
                name="description"
                id="description"
                defaultValue={painting?.description}
                className="w-full h-full  px-3 py-3 outline-none rounded-md border border-gray"
              />
            </div>

            <ImagePreview
              id="paintingImageURL"
              name="paintingImageURL"
              imageURL={painting?.imageURL}
            />
          </div>

          <div className="flex gap-5">
            <ArtistNamesInput
              id="artistId"
              name="artistId"
              painting={painting}
            />

            <select
              name="paintingType"
              defaultValue={painting?.type}
              className="w-full px-3 py-3 outline-none rounded-md border border-gray"
            >
              <option value="">Select type</option>
              <option value="artist">Artist</option>
              <option value="exhibition">Exhibition</option>
            </select>
          </div>

          <input
            type="number"
            className="min-w-full px-3 py-3 outline-none rounded-md border border-gray"
            name="price"
            id="price"
            defaultValue={painting?.price}
            placeholder="Price"
          />

          {/* DIVIDER */}
          <div className="border border-gray"></div>
          <div className="flex justify-end gap-3 text-white">
            <SubmitButton />
            <button
              onClick={() => showCallback(false)}
              type="button"
              className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
