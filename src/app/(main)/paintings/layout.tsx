import BackNav from "@/components/backNav"

interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "About",
}
export default function layout({ children }: IProps) {
    return (
        <>
            <BackNav
                label="Back to a artist"
            />
            {children}
        </>
    )
}
