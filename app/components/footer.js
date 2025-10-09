"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16">
      {/* Decorative top accent */}
      <div className="absolute -top-12 left-0 w-full h-12 bg-[#B71C1C]/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand + description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#B71C1C]">Anthmal Webster</h2>
          <p className="text-gray-300">
            We provide expert financial solutions and consulting services to
            help your business thrive.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B71C1C] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B71C1C] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B71C1C] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B71C1C] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B71C1C] transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#B71C1C]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#B71C1C] transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#B71C1C] transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-[#B71C1C] transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/newsletter"
                className="hover:text-[#B71C1C] transition"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#B71C1C] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#B71C1C]">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/services"
                className="hover:text-[#B71C1C] transition"
              >
                Accounting
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#B71C1C] transition"
              >
                Tax Planning
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#B71C1C] transition"
              >
                Financial Consulting
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#B71C1C] transition"
              >
                Business Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#B71C1C]">Contact Us</h3>
          <p className="text-gray-300">
            📍 123 Finance Street, Harare, Zimbabwe
          </p>
          <p className="text-gray-300">📞 +263 776 666 360</p>
          <p className="text-gray-300">
            ✉️ info@anthmalwebster.com | anthmalwebster@gmail.com
          </p>
          <p className="text-gray-300">⏰ Mon-Fri: 8am - 5pm</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Anthmal Webster. All rights reserved.
      </div>
    </footer>
  );
}
