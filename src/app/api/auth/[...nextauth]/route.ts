import { authOptions } from "@/utils/authOption"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { cookies } from 'next/headers'

// export const authOptions: NextAuthOptions = {
//     secret: process.env.NEXTAUTH_SECRET,
//     providers: [
//         Credentials({
//             name: 'OTP',
//             credentials: {
//                 otp: { label: 'otp', type: 'text' }
//             },
//             async authorize(credentials, req) {
//                 const email = cookies().get('otp-email')?.value
//                 if (!email) throw new Error('You must sign in first.')
//                 if (!credentials?.otp) throw new Error('OTP is required.')

//                 const res = await fetch(`${process.env.API_URI}/api/v1/auth/otp/verify`, {
//                     method: 'POST',
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({
//                         email,
//                         otp: credentials.otp
//                     })
//                 })

//                 const data = await res.json()
//                 console.log(data)
//                 if (!res.ok) {
//                     if (!data.success) throw new Error(data.message)
//                     throw new Error(res.statusText)
//                 }
//                 return data
//             },
//         })
//     ],
//     callbacks: {
//         async signIn() {
//             cookies().delete('otp-email')
//             return true
//         },
//         async jwt({ token, user, account }) {
//             if (account) token = { ...token, data: user }
//             return token
//         },
//         async session({ session, token }) {
//             session.user = token.data as any
//             return session
//         },
//         async redirect({ baseUrl, url }) {
//             return url
//         }
//     },
//     pages: {
//         signIn: '/auth/signin',
//         error: '/auth/signin'
//     }
// }

// const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
//     return NextAuth(req, res, authOptions)
// }

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }