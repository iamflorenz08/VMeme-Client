interface IProps {
    children: React.ReactNode
}

export default function layout({ children }: IProps) {
    return (
        <section>
            <nav>Hi Im navbar</nav>
            {children}
        </section>
    )
}
