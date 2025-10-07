"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Anthmal-Webster.jpg"
              alt="Anthmal Webster Logo"
              width={180} // ✅ logo size from screenshot
              height={50}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-sm font-semibold tracking-wide transition ${
                      isActive
                        ? "text-[#B71C1C]"
                        : "text-gray-800 hover:text-[#B71C1C]"
                    }`}
                  >
                    {link.name}
                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#B71C1C] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-[#B71C1C] hover:text-red-800 transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <FaLinkedin size={22} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={28} color="#B71C1C" />
            ) : (
              <Menu size={28} color="#B71C1C" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md border-t border-gray-200"
        >
          <div className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold ${
                    isActive
                      ? "text-[#B71C1C]"
                      : "text-gray-800 hover:text-[#B71C1C]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* LinkedIn Mobile */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B71C1C] hover:text-red-800 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
