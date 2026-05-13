import type { Request, Response } from "express";
import {
    createPollService,
    deletePollService,
    getMyPollsService,
    getPollByIdService,
    getPublicPollService,
    publishPollService,
} from "./poll.service.js";
import { createPollSchema } from "./poll.validation.js";
import { getAuth } from "@clerk/express";
import { getMongoUser } from "../../utils/getMongoUser.js";


export const createPollController = async (req: Request, res: Response) => {
    try {
        const validatedData = createPollSchema.parse(req.body);

        const { userId: clerkId } = getAuth(req);

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await getMongoUser(clerkId);

        const poll = await createPollService(validatedData, user._id.toString());

        return res.status(201).json({
            success: true,
            message: "Poll created successfully",
            poll,
        });

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/************************************************************************************ */
/************************************************************************************ */

export const getMyPollsController = async (req: Request, res: Response) => {
    try {
        const { userId: clerkId } = getAuth(req);

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await getMongoUser(clerkId);

        const polls = await getMyPollsService(user._id.toString());

        return res.status(200).json({
            success: true,
            polls,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/************************************************************************************ */
/************************************************************************************ */

export const getPollByIdController = async (
    req: Request<{ pollId: string }>,
    res: Response
) => {
    try {
        const { userId: clerkId } = getAuth(req);

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await getMongoUser(clerkId);

        const poll = await getPollByIdService(req.params.pollId);

        if (!poll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found",
            });
        }

        if (poll.creator.toString() !== user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Forbidden",
            });
        }

        return res.status(200).json({
            success: true,
            poll,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/************************************************************************************ */
/************************************************************************************ */


export const getPublicPollController = async (req: Request<{ slug: string }>, res: Response) => {
    try {
        const poll = await getPublicPollService(req.params.slug);

        if (!poll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found",
            });
        }

        return res.status(200).json({
            success: true,
            poll,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


/************************************************************************************ */
/************************************************************************************ */


export const deletePollController = async (
    req: Request<{ pollId: string }>,
    res: Response
) => {
    try {
        const { userId: clerkId } = getAuth(req);

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await getMongoUser(clerkId);

        const poll = await getPollByIdService(req.params.pollId);

        if (!poll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found",
            });
        }

        if (poll.creator.toString() !== user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Forbidden",
            });
        }

        await deletePollService(req.params.pollId);

        return res.status(200).json({
            success: true,
            message: "Poll deleted successfully",
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/************************************************************************************ */
/************************************************************************************ */

export const publishPollController = async (
    req: Request<{ pollId: string }>,
    res: Response
) => {
    try {
        const { userId: clerkId } = getAuth(req);

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const user = await getMongoUser(clerkId);

        const poll = await getPollByIdService(req.params.pollId);

        if (!poll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found",
            });
        }

        if (poll.creator.toString() !== user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Forbidden",
            });
        }

        const updatedPoll = await publishPollService(req.params.pollId);

        return res.status(200).json({
            success: true,
            message: "Poll published successfully",
            poll: updatedPoll,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};