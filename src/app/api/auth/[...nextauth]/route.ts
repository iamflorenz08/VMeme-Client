import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { use } from "react"

const handler = NextAuth({
    secret: process.env.TOKEN,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                type: { label: 'Type', type: 'hidden' }
            },
            async authorize(credentials, req) {
                console.log('hi')
                throw new Error('nigger ')
                return { email: 'hi', id: '12', }
            },
        }),
    ],
    callbacks: {
        signIn({ account, user, credentials }) {
            console.log(account, user, credentials)

            return false
        },
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin'
    }
})

export { handler as GET, handler as POST }