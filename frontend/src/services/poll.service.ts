import { useAuth } from "@clerk/react";
import { axiosInstance } from "../api/axios";
import type { CreatePollInput } from "../types/polltypes";

const { getToken } = useAuth();
const token = await getToken();


/* CREATE */
export const createPollAPI = async (data: CreatePollInput) => {
    const res = await axiosInstance.post("/polls", data);
    return res.data;
};

/* GET MY POLLS */
export const getMyPollsAPI = async () => {
    const res = await axiosInstance.get("/polls/my", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

/* DELETE POLL */
export const deletePollAPI = async (pollId: string) => {
    const res = await axiosInstance.delete(`/polls/${pollId}`);
    return res.data;
};

/* PUBLISH POLL */
export const publishPollAPI = async (pollId: string) => {
    const res = await axiosInstance.patch(`/polls/${pollId}/publish`);
    return res.data;
};

/* GET SINGLE POLL */
export const getPollByIdAPI = async (pollId: string) => {
    const res = await axiosInstance.get(`/polls/${pollId}`);
    return res.data;
};

export const getPublicPollAPI = async (slug: string) => {
    const res = await axiosInstance.get(`/polls/public/${slug}`);
    return res.data;
};