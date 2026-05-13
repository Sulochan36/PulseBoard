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

        const email = clerkUser.emailAddresses?.[0]?.emailAddress;

        const username = clerkUser.username || clerkUser.firstName || "user";

        const imageUrl = clerkUser.imageUrl;

        
        const user = await User.findOneAndUpdate(
            { clerkId },
            {
                clerkId,
                email,
                username,
                imageUrl,
            },
            {
                new: true,
                upsert: true,
            }
        );

        return res.status(200).json({
            success: true,
            message: "User synced successfully",
            user,
        });

    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Something went wrong";

        return res.status(500).json({
            success: false,
            message,
        });
    }
};


// import type { Request, Response } from "express"
// import User from "./user.model.js"
// import { getAuth } from "@clerk/express"





// export const syncUser = async (req: Request,
//     res: Response) => {

//     try {

//         const { userId: clerkId } = getAuth(req)

//         const existingUser = await User.findOne({ clerkId })


//         if (existingUser) {

//             return res.status(200).json({
//                 success: true,
//                 message: 'User already exists',
//                 user: existingUser,
//             })
//         }


//         const newUser = await User.create({
//             clerkId,
//             email: req.body.email,
//             username: req.body.username,
//             ...(req.body.imageUrl && {
//                 imageUrl: req.body.imageUrl,
//             }),

//         })


//         res.status(201).json({
//             success: true,
//             message: 'User created successfully',
//             user: newUser,
//         })

//     } catch (error) {

//         const message =
//             error instanceof Error
//                 ? error.message
//                 : "Something went wrong"

//         res.status(500).json({
//             success: false,
//             message,
//         })
//     }
// }