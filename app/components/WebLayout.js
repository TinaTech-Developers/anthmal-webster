import Footer from "./footer";

import Navbar from "./navbar";

export const metadata = {
  title: "My Next.js App",
  description: "A fresh layout with Navbar and Footer",
};

export default function WebLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar at the top */}
      <header className="sticky top-0 z-50 shadow-md bg-white">
        <Navbar />
      </header>

      {/* Main content */}
      <main className=" w-full  ">{children}</main>

      {/* Footer at the bottom */}
      <footer className="bg-white shadow-inner mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
