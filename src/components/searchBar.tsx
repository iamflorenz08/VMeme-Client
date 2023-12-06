'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"

interface IProps {
    placeholder?: string
}

export default function SearchBar({ placeholder }: IProps) {
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
        if (e.code === 'Enter') router.push(`${pathname}?${createQueryString('search', search)}`)
    }

    return (
        <div className="flex gap-5 items-center duration-300">
            <input
                onKeyDown={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="outline-none border border-gray rounded-full px-4 py-1.5"
                placeholder={placeholder || 'Search...'}
                type="text" name="search" id="search" />
        </div>

    )
}
