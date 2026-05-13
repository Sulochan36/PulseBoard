import express from 'express';
import cors from 'cors'

import { clerkMiddleware } from '@clerk/express'

import userRoutes from './modules/user/user.routes.js'
import pollRoutes from "./modules/polls/poll.routes.js";
import responseRoutes from "./modules/response/response.routes.js";

export function createApp(){
    const app = express();

    


    app.use(express.json());

    app.use(clerkMiddleware())

    app.use(
        cors({
            origin: process.env.FRONTEND_URL,
            credentials: true,
        })
    )

    app.get('/health' , (req,res) => {
        return res.json({ ok: true });
    })

    app.use('/api/users', userRoutes)
    app.use("/api/polls", pollRoutes);
    app.use("/api/responses", responseRoutes);

    return app;
}