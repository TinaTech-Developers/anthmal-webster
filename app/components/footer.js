"use client";

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
            <a href="#" className="hover:text-[#B71C1C] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#B71C1C] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#B71C1C] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-[#B71C1C] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#B71C1C] transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#B71C1C]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-[#B71C1C] transition">
                Home
              </a>
            </li>
            <li>
              <a href="services" className="hover:text-[#B71C1C] transition">
                Services
              </a>
            </li>
            <li>
              <a href="about-us" className="hover:text-[#B71C1C] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="newsletter" className="hover:text-[#B71C1C] transition">
                Newsletter
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#B71C1C] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#B71C1C]">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/services" className="hover:text-[#B71C1C] transition">
                Accounting
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#B71C1C] transition">
                Tax Planning
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#B71C1C] transition">
                Financial Consulting
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#B71C1C] transition">
                Business Solutions
              </a>
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
