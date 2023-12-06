export interface IUser {
    _id: string,
    email: string,
    fullName: {
        first: string,
        last: string,
    },
    createdAt: Date
}