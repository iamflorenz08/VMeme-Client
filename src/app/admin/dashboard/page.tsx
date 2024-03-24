import { AiOutlineProfile } from "@react-icons/all-files/ai/AiOutlineProfile";
import { MdPendingActions } from "@react-icons/all-files/md/MdPendingActions";
import { HiMiniUserGroup } from "@react-icons/all-files/hi2/HiMiniUserGroup";
import { FaPaintbrush } from "@react-icons/all-files/fa6/FaPaintbrush";
import { FaPrint } from "@react-icons/all-files/fa/FaPrint";
import { IoIosDocument } from "@react-icons/all-files/io/IoIosDocument";
import { GrTransaction } from "@react-icons/all-files/gr/GrTransaction";
import CardButton from "./cardButton";
interface IDashboard {
  label: string;
  count: number;
  icon: any;
  bgColor: string;
  href?: string;
}

interface IDocumentCounts {
  artistCount: number;
  paintingCount: number;
  pendingOrdersCount: number;
  customerCount: number;
  paidPaintingsCount: number;
  paintingsAvailableCount: number;
  transactionMadeCount: number;
}

const getDocumentCount = async () => {
  const res = await fetch(`${process.env.API_URI}/api/v1/dashboard`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function DashboardPage() {
  const documentCounts: IDocumentCounts = await getDocumentCount();
  const summaryList: IDashboard[] = [
    {
      label: "Artists",
      count: documentCounts.artistCount,
      bgColor: "bg-blue-500",
      icon: <FaPaintbrush className="text-black opacity-30" size={120} />,
    },
    {
      label: "Paintings",
      count: documentCounts.paintingCount,
      bgColor: "bg-pink-500",
      icon: <AiOutlineProfile className="text-black opacity-30" size={120} />,
    },
    {
      label: "Pending Orders",
      count: documentCounts.pendingOrdersCount,
      bgColor: "bg-green-500",
      icon: <MdPendingActions className="text-black opacity-30" size={120} />,
    },
    {
      label: "Registered Customers",
      count: documentCounts.customerCount,
      bgColor: "bg-sky-500",
      icon: <HiMiniUserGroup className="text-black opacity-30" size={120} />,
    },
    {
      label: "To be issued (COA)",
      count: documentCounts.paidPaintingsCount,
      bgColor: "bg-[#EA6A47]",
      icon: <IoIosDocument className="text-black opacity-30" size={120} />,
      href: "/api/v1/dashboard/pdf/to-be-issued",
    },
    {
      label: "Available Paintings",
      count: documentCounts.paintingsAvailableCount,
      bgColor: "bg-[#7E909A]",
      icon: <FaPaintbrush className="text-black opacity-30" size={120} />,
      href: "/api/v1/dashboard/pdf/paintings-available",
    },
    {
      label: "Transaction Made Today",
      count: documentCounts.transactionMadeCount,
      bgColor: "bg-[#AC3E31]",
      icon: <GrTransaction className="text-black opacity-30" size={120} />,
      href: "/api/v1/dashboard/pdf/transaction-made",
    },
  ];

  return (
    <main className="flex flex-col h-full p-8 gap-8">
      <h1 className="font-medium text-4xl h-fit">Dashboard Page</h1>
      <div className="grid grid-cols-3 gap-5 2xl:grid-cols-4">
        {summaryList.map((data, index) => (
          <CardButton
            href={data.href}
            disabled={!data.href}
            className={data.bgColor}
            key={index}
          >
            <div className="flex flex-col text-white font-medium">
              <h1 className="text-7xl">{data.count}</h1>
              <span className="text-2xl">{data.label}</span>
            </div>
            <div className="">{data.icon}</div>
            {data.href && (
              <>
                <span className="text-white absolute top-4 right-4">
                  <FaPrint size={24} />
                </span>
                <div className="absolute inset-0 hover:opacity-100 opacity-0 bg-black bg-opacity-20 w-full h-full flex justify-center items-center text-white text-2xl font-medium duration-300 ">
                  Download Report
                </div>
              </>
            )}
          </CardButton>
        ))}
      </div>
    </main>
  );
}
