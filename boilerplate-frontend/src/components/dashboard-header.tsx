"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function DashboardHeader() {
    const { data: session } = useSession();

    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:bg-slate-950">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                        {session?.user?.name || session?.user?.email}
                    </span>
                    <Avatar>
                        <AvatarImage src={session?.user?.image || ""} />
                        <AvatarFallback>
                            {session?.user?.name?.charAt(0) || "U"}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <Button variant="ghost" size="icon" onClick={() => signOut()}>
                    <LogOut className="h-5 w-5" />
                    <span className="sr-only">Logout</span>
                </Button>
            </div>
        </header>
    );
}
