import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage newsletters and content in your dashboard",
};

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Newsletters", href: "/admin/newsletter" },
  { name: "Subscribers", href: "/admin/subscribers" },
  { name: "Settings", href: "/admin/settings" },
];
export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 shadow-md bg-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#B71C1C]">Admin Panel</h1>
      </header>

      <div className="flex flex-1">
        <aside className="hidden lg:flex flex-col w-64 bg-[#F8EAEA] border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <a
              href="/admin/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4]"
            >
              Dashboard
            </a>
            <a
              href="/admin/newsletter"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4]"
            >
              Newsletters
            </a>
            <a
              href="/admin/subscribers"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4]"
            >
              Subscribers
            </a>
            <a
              href="/admin/settings"
              className="block px-4 py-2 rounded-lg hover:bg-[#FAD4D4]"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>

      <footer className="bg-white shadow-inner mt-auto text-center py-3 text-sm text-gray-500">
        © {new Date().getFullYear()} Anthmal Webster
      </footer>
    </div>
  );
}
