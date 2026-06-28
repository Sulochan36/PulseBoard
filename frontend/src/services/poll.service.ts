import { axiosInstance } from "../api/axios";
import type { CreatePollInput } from "../types/polltypes";
;



export const createPollAPI = async (data: CreatePollInput) => {
    const res = await axiosInstance.post("/polls", data);
    return res.data;
};


export const getMyPollsAPI = async () => {
    const res = await axiosInstance.get("/polls/my");
    return res.data;
};


export const deletePollAPI = async (pollId: string) => {
    const res = await axiosInstance.delete(`/polls/${pollId}`);
    return res.data;
};


export const publishPollAPI = async (pollId: string) => {
    const res = await axiosInstance.patch(`/polls/${pollId}/publish`);
    return res.data;
};


export const getPollByIdAPI = async (pollId: string) => {
    const res = await axiosInstance.get(`/polls/${pollId}`);
    return res.data;
};

export const getPublicPollAPI = async (slug: string) => {
    const res = await axiosInstance.get(`/polls/public/${slug}`);
    return res.data;
};