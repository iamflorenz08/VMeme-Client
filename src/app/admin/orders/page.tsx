import { IOrder } from "@/types/orderTypes";
import { IPainting } from "@/types/paintings";
import Link from "next/link";
import OrdersTable from "./ordersTable";
import SearchBar from "@/components/searchBar";

interface IProps {
  searchParams: { page: number; search: string };
}

interface IOrderResult {
  totalDocuments: number;
  page: number;
  data: Array<IOrder>;
}

const getOrders = async (page?: number, search?: string) => {
  const res = await fetch(
    `${process.env.API_URI}/api/v1/order?page=${page}&limit=10&${
      search ? "search=" + search : ""
    }`,
    { cache: "no-cache" }
  );
  return res.json();
};

export default async function OrdersPage({ searchParams }: IProps) {
  let page = Number(searchParams.page) || 1;
  const orders: IOrderResult = await getOrders(page, searchParams.search);

  return (
    <main className="flex flex-col h-full p-8 gap-8">
      <h1 className="font-medium text-4xl h-fit">Orders Page</h1>
      <div className="flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg">
        <div className="flex justify-between">
          <SearchBar placeholder="Search reference ID..." />
        </div>

        <OrdersTable orders={orders.data || []} />

        <div className="flex justify-between items-center">
          <span>
            Showing {(orders.page - 1) * 10 + 1} to {orders.page * 10} of{" "}
            {orders.totalDocuments} results
          </span>
          <div className="flex gap-5">
            <Link
              href={"/admin/orders?page=" + (page > 1 ? page - 1 : 1)}
              className="bg-primary text-white px-5 py-2 rounded-md"
            >
              Previous
            </Link>
            <Link
              href={"/admin/orders?page=" + (page + 1)}
              className="bg-primary text-white px-5 py-2 rounded-md"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
