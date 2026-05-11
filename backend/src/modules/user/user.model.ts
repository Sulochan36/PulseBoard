import mongoose, { Schema, model } from "mongoose"

export interface IUser{
    clerkId: string
    email: string
    username: string
    imageUrl?: string
}

const userSchema = new Schema<IUser>(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        username: {
            type: String,
            required: true,
        },

        imageUrl: {
            type: String,
        },
    },

    {
        timestamps: true,
    }
)

const User = model<IUser>('User', userSchema)

export default User