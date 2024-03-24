"use client";

import Link from "next/link";
import { downloadReport } from "./action";

interface IProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  href?: string;
}

export default function CardButton({
  className,
  disabled,
  children,
  href,
}: IProps) {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_API_URI}${href}`}
      aria-disabled={disabled}
      className={`${className} ${
        disabled && "pointer-events-none"
      } text-left flex px-8 py-10 justify-between items-center rounded-lg relative overflow-hidden w-full`}
    >
      {children}
    </Link>
  );
}
