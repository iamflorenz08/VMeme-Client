interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "Dashboard",
};

export default function layout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
