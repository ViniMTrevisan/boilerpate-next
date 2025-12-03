import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const api = axios.create({
    baseURL: "/api/proxy",
});

api.interceptors.request.use(async (config) => {
    const session = await getSession();

    if (session && (session as any).accessToken) {
        config.headers.Authorization = `Bearer ${(session as any).accessToken}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            await signOut();
        }
        return Promise.reject(error);
    }
);

export default api;
