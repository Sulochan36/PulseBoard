
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : import.meta.env.VITE_BACKEND_URL + "/api",
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    console.log("🌐 REQUEST:");
    console.log("URL:", config.url);
    console.log("withCredentials:", config.withCredentials);
    console.log("HEADERS:", config.headers);
    return config;
});


// 2. A function to inject the Clerk getToken method
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