
import axios from "axios";
import toast from "react-hot-toast";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : import.meta.env.VITE_BACKEND_URL + "/api",
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => {

        const message = response?.data?.message;

        if (message) {
            toast.success(message);
        }
        return response;
    },

    (error) => {

        console.log("AXIOS ERROR:", error);

        const message = error?.response?.data?.message || "Something went wrong";
        const status = error?.response?.status;
        if (status === 400 ||status === 401 ||status === 403) {
            toast.error(message);
        }

        
        else if (status >= 500) {
            toast.error("Server Error");
        }

        
        else {
            toast.error(message);
        }
        return Promise.reject(error);
    }
);



export const setupAxiosInterceptors = (getToken: () => Promise<string | null>) => {
    axiosInstance.interceptors.request.use(
        async (config) => {
            try {
                // Fetch the latest token from Clerk automatically
                const token = await getToken();

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            } catch (error) {
                console.error("Failed to fetch Clerk token", error);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};