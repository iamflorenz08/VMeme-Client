interface IProps {
    children: React.ReactNode
}
export default function layout({children}: IProps) {
    return (
        <>{children}</>
    )
}
