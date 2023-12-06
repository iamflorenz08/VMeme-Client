'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { FaSortAlphaDown } from '@react-icons/all-files/fa/FaSortAlphaDown'
import { FaSortAlphaUp } from '@react-icons/all-files/fa/FaSortAlphaUp'
import Link from "next/link"

interface IProps {
    sort: string
}



export default function SearchBar({ sort }: IProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()!
    const [search, setSearch] = useState<string>('')

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const handleSearch = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') router.push(`/artists?search=${search}`)
    }

    return (
        <div className="flex gap-5 items-center duration-300">
            <input
                onKeyDown={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="border border-gray-300 w-96 h-11 rounded-full py-2 px-4 outline-none"
                placeholder="Search..."
                type="text" name="search" id="search" />

            {sort === 'desc'?
                <Link
                    className="hover:bg-gray duration-300 p-2 rounded-full text-black text-opacity-60"
                    href={pathname + '?' + createQueryString('sort', 'asc')}
                >
                    <FaSortAlphaDown size={20} />
                </Link> :
                <Link
                    className="hover:bg-gray duration-300 p-2 rounded-full text-black text-opacity-60"
                    href={pathname + '?' + createQueryString('sort', 'desc')}
                >
                    <FaSortAlphaUp size={20} />
                </Link>
            }
        </div>

    )
}
