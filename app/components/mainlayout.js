"use client";

import { motion } from "framer-motion";

export default function MainLayout({
  title,
  subtitle,
  backgroundImage,
  children,
}) {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* 🟥 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#B71C1C]/80 mix-blend-multiply"></div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">{title}</h1>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-lg opacity-90">{subtitle}</p>
          )}
        </motion.div>
      </section>

      {/* 🔽 PAGE CONTENT */}
      <div className="relative z-10">{children}</div>
    </main>
  );
}
