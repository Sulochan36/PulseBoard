import { nanoid } from "nanoid";
import { PollModel } from "./poll.model.js";
import type { CreatePollInput } from "./poll.types.js";


export const createPollService = async (data: CreatePollInput, userId: string) => {

    const slug = nanoid(8);
    const poll = await PollModel.create({
        ...data,
        slug,
        creator: userId,
    });
    return poll;
};



export const getMyPollsService = async (userId: string) => {
    return await PollModel.find({
        creator: userId,
    }).sort({ createdAt: -1 });
};



export const getPollByIdService = async (pollId: string) => {
    return await PollModel.findById(pollId);
};



export const getPublicPollService = async (slug: string) => {
    return await PollModel.findOne({
        slug,
    });
};



export const deletePollService = async (pollId: string) => {
    return await PollModel.findByIdAndDelete(
        pollId
    );
};


export const publishPollService = async (pollId: string) => {
    return await PollModel.findByIdAndUpdate(
        pollId,
        {
            isPublished: true,
        },
        {
            new: true,
        }
    );
};