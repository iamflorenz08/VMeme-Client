interface IProps {
    children: React.ReactNode
}

export default function ArtistLayout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
