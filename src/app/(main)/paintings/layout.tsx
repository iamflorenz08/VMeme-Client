import BackNav from "@/components/backNav"

interface IProps {
    children: React.ReactNode
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
