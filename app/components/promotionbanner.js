"use client";
import { motion } from "framer-motion";

export default function PromotionBanner() {
  return (
    <section className="relative py-32 text-white text-center overflow-hidden">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg.')",
        }}
      ></div>

      {/* ✅ Dark Red Overlay */}
      <div className="absolute inset-0 bg-[#B71C1C]/80 mix-blend-multiply"></div>

      {/* ✅ Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Stand out with our personalized accounting services.
        </h2>

        <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed">
          <span className="font-semibold text-[#B71C1C]">Anthmal Webster</span>{" "}
          helps your business shine with personalized accounting services
          designed to meet your unique needs, streamline finances, and give you
          a competitive edge.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#B71C1C] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Book Your Free Session
        </motion.button>
      </motion.div>

      {/* ✅ Subtle glow accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B71C1C]/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
