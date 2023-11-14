interface IProps {
    children: React.ReactNode
}
export default function layout({ children }: IProps) {
    return (
        <section>
            {children}
        </section>
    )
}
