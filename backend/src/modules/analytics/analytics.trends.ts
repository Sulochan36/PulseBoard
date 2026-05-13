import { Types } from "mongoose";
import { ResponseModel } from "../response/response.model.js";

export const getTrends = (pollId: string) => {
    return ResponseModel.aggregate([
        { $match: { pollId: new Types.ObjectId(pollId) } },
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%H:%M",
                        date: "$submittedAt",
                    },
                },
                count: { $sum: 1 },
            },
        },
        { $sort: { _id: 1 } },
    ]);
};