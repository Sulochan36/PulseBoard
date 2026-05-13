import { axiosInstance } from "../api/axios";
import type { CreatePollInput } from "../types/polltypes";
;


/* CREATE */
export const createPollAPI = async (data: CreatePollInput, token: string | null) => {
    const res = await axiosInstance.post("/polls", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

/* GET MY POLLS */
export const getMyPollsAPI = async (token:string | null) => {
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
export const getPollByIdAPI = async (pollId: string, token: string | null) => {
    const res = await axiosInstance.get(`/polls/${pollId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export const getPublicPollAPI = async (slug: string) => {
    const res = await axiosInstance.get(`/polls/public/${slug}`);
    return res.data;
};