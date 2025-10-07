"use client";

import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section className="relative bg-[#B71C1C] py-20 text-white overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B71C1C]/80 via-[#B71C1C]/60 to-[#B71C1C]/80 -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Take Your Business to the Next Level?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Get in touch with our experts today and discover tailored financial
          solutions that fit your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-[#B71C1C] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get a Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-[#B71C1C] transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Optional decorative circles */}
      <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
