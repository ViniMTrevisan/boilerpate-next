import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "./api";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const payload = new URLSearchParams();
                payload.append("username", credentials.email);
                payload.append("password", credentials.password);

                try {
                    // We override baseURL to hit the backend directly from the server side
                    // to avoid relative URL issues and unnecessary proxy hops during login.
                    // Assuming API_URL is the root (e.g. http://localhost:8000), we append /api/v1 here.
                    const response = await api.post("/api/v1/auth/login", payload, {
                        baseURL: process.env.API_URL,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    });

                    const user = response.data;

                    if (user && user.access_token) {
                        return {
                            id: user.id || "1", // Fallback if backend doesn't return ID
                            email: credentials.email,
                            name: user.name,
                            accessToken: user.access_token,
                        };
                    }

                    return null;
                } catch (error) {
                    console.error("Login error:", error);
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.accessToken = token.accessToken as string;
            }
            return session;
        },
    },
};
