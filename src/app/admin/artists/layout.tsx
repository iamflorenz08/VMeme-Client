interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "Artists",
};

export default function layout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
