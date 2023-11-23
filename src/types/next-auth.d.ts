import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            _id: string,
            email: email,
            fullName: {
                first: string,
                last: string
            }
        },
    }
}