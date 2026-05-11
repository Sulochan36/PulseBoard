import express from 'express';
import cors from 'cors'

import { clerkMiddleware } from '@clerk/express'
import userRoutes from './modules/user/user.routes.js'

export function createApp(){
    const app = express();

    app.use(
        cors({
            origin: process.env.FRONTEND_URL,
            credentials: true,
        })
    )


    app.use(express.json());

    app.use(clerkMiddleware())

    app.get('/health' , (req,res) => {
        return res.json({ ok: true });
    })

    app.use('/api/users', userRoutes)

    return app;
}