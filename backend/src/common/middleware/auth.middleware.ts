import { getAuth } from "@clerk/express";
import type { Request, Response, NextFunction } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = getAuth(req);

    if (!userId) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    next();
};