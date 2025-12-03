"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function DashboardPage() {
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function checkHealth() {
            try {
                // Assuming the backend has a /health endpoint. 
                // If not, this will fail, but the mechanism is what we are testing.
                const response = await api.get("/health");
                setData(response.data);
                setStatus("success");
            } catch (error) {
                console.error("Health check failed", error);
                setStatus("error");
            }
        }

        checkHealth();
    }, []);

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Backend Status</CardTitle>
                        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
                        {status === "success" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                        {status === "error" && <XCircle className="h-4 w-4 text-red-500" />}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {status === "loading" && "Checking..."}
                            {status === "success" && "Online"}
                            {status === "error" && "Offline"}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {status === "success"
                                ? JSON.stringify(data)
                                : "Connection to /health endpoint"}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
