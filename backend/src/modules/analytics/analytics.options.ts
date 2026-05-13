import { Types } from "mongoose";
import { ResponseModel } from "../response/response.model.js";

export const getOptionStats = (pollId: string) => {
    return ResponseModel.aggregate([
        { $match: { pollId: new Types.ObjectId(pollId) } },
        { $unwind: "$answers" },
        {
            $group: {
                _id: {
                    questionId: "$answers.questionId",
                    optionId: "$answers.selectedOptionId",
                },
                count: { $sum: 1 },
            },
        },
    ]);
};