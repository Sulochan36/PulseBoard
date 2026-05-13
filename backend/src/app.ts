import express from 'express';
import cors from 'cors'
import cookieParser from "cookie-parser";

import { clerkMiddleware, getAuth } from '@clerk/express'

import userRoutes from './modules/user/user.routes.js'
import pollRoutes from "./modules/polls/poll.routes.js";
import responseRoutes from "./modules/response/response.routes.js";

export function createApp(){
    const app = express();
    app.set("trust proxy", 1);
    app.use(
        cors({
            origin: process.env.FRONTEND_URL,
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
        })
    )


    app.use(express.json());
    app.use(cookieParser());
    app.use(clerkMiddleware())

    

    app.use((req, res, next) => {
        console.log("🔥 URL:", req.url);
        console.log("🍪 COOKIE HEADER:", req.headers.cookie);
        console.log("🔑 AUTH:", getAuth(req));
        next();
    });

    app.get('/health' , (req,res) => {
        return res.json({ ok: true });
    })

    app.use('/api/users', userRoutes)
    app.use("/api/polls", pollRoutes);
    app.use("/api/responses", responseRoutes);

    return app;
}