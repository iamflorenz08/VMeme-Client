interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "Exhibitions",
}
export default function layout({ children }: IProps) {
    return (
        <section>
            {children}
        </section>
    )
}
