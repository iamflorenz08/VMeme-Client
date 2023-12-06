export { default } from "next-auth/middleware"
export const config = { matcher: ["/cart", "/order-tracking/:path*", "/admin/:path*"] }