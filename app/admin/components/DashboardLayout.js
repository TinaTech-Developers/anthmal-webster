"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      // Remove token
      localStorage.removeItem("adminToken");

      // Small timeout to ensure localStorage is cleared
      setTimeout(() => {
        router.replace("/admin");
      }, 50);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 shadow-md bg-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#B71C1C]">Admin Panel</h1>
        <button
          onClick={handleSignOut}
          className="flex bg-[#B71C1C] p-2 text-white items-center gap-2 rounded-lg "
        >
          <LogOut size={18} /> Sign Out
        </button>
      </header>

      <div className="flex flex-1">
        <aside className="hidden lg:flex flex-col w-64 bg-[#F8EAEA] border-r border-gray-200 p-4 justify-between">
          <nav className="space-y-2">
            <Link
              href="/admin/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4] transition"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/newsletter"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4] transition"
            >
              Newsletters
            </Link>
            <Link
              href="/admin/subscribers"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4] transition"
            >
              Subscribers
            </Link>
            <Link
              href="/admin/settings"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4] transition"
            >
              Settings
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>

      <footer className="bg-white shadow-inner mt-auto text-center py-3 text-sm text-gray-500">
        © {new Date().getFullYear()} Anthmal Webster
      </footer>
    </div>
  );
}
