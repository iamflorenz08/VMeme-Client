interface IProps {
    children: React.ReactNode
}

export const metadata = {
    title: "Artists",
}
export default function ArtistLayout({ children }: IProps) {
    return (
        <>{children}</>
    )
}
