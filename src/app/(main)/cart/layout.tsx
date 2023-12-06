interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "Cart",
}
export default function layout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
