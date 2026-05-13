import { ResponseModel } from "./response.model.js";
import { PollModel } from "../polls/poll.model.js";
import { getMongoUser } from "../../utils/getMongoUser.js";
import type { SubmitResponseInput } from "./response.types.js";
import mongoose from "mongoose";

export const submitResponseService = async (data: SubmitResponseInput,clerkId: string | null) => {

    const poll = await PollModel.findById(data.pollId);

    if (!poll) {
        throw new Error("Poll not found");
    }

    
    if (poll.expiresAt < new Date()) {
        throw new Error("Poll has expired");
    }

    let user = null;

    
    if (poll.responseMode === "authenticated") {
        if (!clerkId) {
            throw new Error("Login required to submit response");
        }

        user = await getMongoUser(clerkId);
    }

    const isAnonymous = poll.responseMode === "anonymous";

    
    const response = await ResponseModel.create({
        pollId: new mongoose.Types.ObjectId(data.pollId),
        respondent: user ? user._id : null,
        isAnonymous,
        
        answers: data.answers.map(a => ({
            questionId: new mongoose.Types.ObjectId(a.questionId),
            selectedOptionId: new mongoose.Types.ObjectId(a.selectedOptionId),
        })),


    });

    return response;
};





