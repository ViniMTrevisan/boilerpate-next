import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { DashboardHeader } from "@/components/dashboard-header";
import { Sidebar } from "lucide-react"; // Placeholder for sidebar icon if needed, but we'll build a simple sidebar div

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900">
            {/* Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-white dark:bg-slate-950 md:flex">
                <div className="flex h-16 items-center justify-center border-b">
                    <span className="text-xl font-bold text-primary">SaaS Boilerplate</span>
                </div>
                <nav className="flex-1 space-y-2 p-4">
                    <a
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg bg-slate-100 px-3 py-2 text-slate-900 transition-all hover:text-slate-900 dark:bg-slate-800 dark:text-slate-50"
                    >
                        <Sidebar className="h-4 w-4" />
                        Dashboard
                    </a>
                    {/* Add more links here */}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                <DashboardHeader />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
