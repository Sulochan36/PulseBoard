import type { Request, Response } from "express";
import User from "./user.model.js";
import { getAuth, clerkClient } from "@clerk/express";

export const syncUser = async (req: Request, res: Response) => {
    try {
        const { userId: clerkId } = getAuth(req);

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const clerkUser = await clerkClient.users.getUser(clerkId);


        const email = clerkUser.emailAddresses?.[0]?.emailAddress || "";
        const username = clerkUser.username || clerkUser.firstName || "user";
        const imageUrl = clerkUser.imageUrl || undefined;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "User must have a primary email address on Clerk",
            });
        }

        let user = await User.findOne({
            $or: [
                { clerkId: clerkId },
                { email: email }
            ]
        } as any);

        if (user) {
            
            user.clerkId = clerkId;
            user.email = email;
            user.username = username;
            user.imageUrl = imageUrl;
            await user.save();
        } else {
            user = await User.create({
                clerkId,
                email,
                username,
                imageUrl,
            });
        }

        return res.status(200).json({
            success: true,
            message: "User synced successfully",
            user,
        });

    } catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        return res.status(500).json({
            success: false,
            message,
        });
    }
};
