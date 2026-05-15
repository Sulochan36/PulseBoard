import { axiosInstance } from "../api/axios";

interface SyncUserData {
    email: string | undefined;
    username: string | null | undefined;
    imageUrl?: string;

}

export const syncUserAPI = async (data: SyncUserData) => {
    const response = await axiosInstance.post("/users/sync", data);
    return response.data;
};