interface IProps {
    children: React.ReactNode
}
export const metadata = {
    title: "About",
}
export default function AboutLayout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
