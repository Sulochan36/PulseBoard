import { axiosInstance } from "../api/axios";

export const submitResponseAPI = async (payload: any) => {
    const res = await axiosInstance.post("/responses",payload);

    return res.data;
};


export const getPollAnalyticsAPI = async (pollId: string) => {
    const response = await axiosInstance.get(`/responses/poll/${pollId}/analytics`);
    return response.data;
};