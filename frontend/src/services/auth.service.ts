import {axiosInstance} from "../api/axios";

interface SyncUserData {
    email: string | undefined;
    username: string | null | undefined;
    imageUrl?: string;

}

export const syncUserAPI = async (data: SyncUserData, token: string) => {
    const response = await axiosInstance.post("/users/sync", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};