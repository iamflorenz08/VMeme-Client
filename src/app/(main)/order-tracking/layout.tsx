import BackNav from "@/components/backNav"

interface IProps {
    children: React.ReactNode
}
export const metadata = {
    title: "Order tracking",
}

export default function layout({ children }: IProps) {
    return (
        <>
            <BackNav
                label="Back"
            />
            {children}
        </>
    )
}
