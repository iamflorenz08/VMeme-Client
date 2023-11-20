import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const handler = NextAuth({
    secret: process.env.TOKEN,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                return null
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin'
    }
})

export { handler as GET, handler as POST }