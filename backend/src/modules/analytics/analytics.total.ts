import { ResponseModel } from "../response/response.model.js";


export const getTotalResponses = (pollId: string) => {
    return ResponseModel.countDocuments({ pollId });
};