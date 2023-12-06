interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "Customers",
};

export default function layout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
