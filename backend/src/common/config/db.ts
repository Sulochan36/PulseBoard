import mongoose, { Error } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

export async function connectDB(uri:string | undefined): Promise<mongoose.Connection> {
    
    if (!uri) {
        throw new Error('MongoDB URI is required');
    }

    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return mongoose.connection;
    } catch (error: unknown) {
        console.error('MongoDB connection failed:', (error as Error).message);
        throw error;
    }

}