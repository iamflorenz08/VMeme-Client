'use server'

export const downloadReport = async (href: string | undefined) => {
    try {
        const res = await fetch(`${process.env.API_URI}${href}`)
        const data = await res.json()
        console.log(data)
        if (!res.ok) throw new Error(data.message)
    } catch (error: any) {
        console.log(error.message)
    }
}