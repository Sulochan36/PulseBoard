import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import { submitResponseSchema } from "./response.validation.js";
import { submitResponseService } from "./response.service.js";
import { getIO } from "../../socket.js";
import { getPollAnalyticsService } from "../analytics/analytics.service.js";

export const submitResponseController = async (req: Request, res: Response) => {
    try {
        const validatedData = submitResponseSchema.parse(req.body);

        const { userId } = getAuth(req); // can be null

        const response = await submitResponseService(validatedData,userId || null);

        const analytics = await getPollAnalyticsService(validatedData.pollId);

        const io = getIO();

        console.log("📡 EMITTING ANALYTICS UPDATE TO ROOM:", validatedData.pollId);
        console.log("📦 PAYLOAD:", analytics);

        io.to(validatedData.pollId.toString()).emit("poll:analyticsUpdated",analytics);

        return res.status(201).json({
            success: true,
            message: "Response submitted successfully",
            response,
        });

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getPollAnalyticsController = async (req: Request,res: Response) => {
    try {
        const pollId = req.params.pollId;

        if (!pollId || typeof pollId !== "string") {
            return res.status(400).json({
                success: false,
                message: "Invalid pollId",
            });
        }

        const data = await getPollAnalyticsService(pollId);
        
        console.log("Analytics generated successfully");
        console.log("keys:", Object.keys(data));
        

        return res.status(200).json({
            success: true,
            data,
        });
    } catch (error: any) {
        console.log("Analytics Controller Error:");
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};