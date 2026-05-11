import api from "../api/axios";

interface SyncUserData {
    email: string | undefined;
    username: string | null | undefined;
    imageUrl?: string;

}

export const syncUserAPI = async (data: SyncUserData) => {
    const response = await api.post("/api/users/sync",data);
    return response.data;
};