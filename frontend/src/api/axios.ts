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
