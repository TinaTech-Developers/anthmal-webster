"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/hero1.jpg",
    alt: "Accounting team working",
    title: "Trusted Chartered Accountants",
    subtitle: "for Your Business Growth",
    description:
      "At Anthmal Webster, we provide expert financial advice, tax planning, and business solutions tailored to your needs.",
  },
  {
    src: "/hero2.jpg",
    alt: "Financial planning",
    title: "Expert Financial Planning",
    subtitle: "for Every Business",
    description:
      "We help businesses of all sizes with strategic financial planning and management solutions.",
  },
  {
    src: "/hero3.jpg",
    alt: "Business growth charts",
    title: "Drive Business Growth",
    subtitle: "with Reliable Insights",
    description:
      "Our team provides actionable insights to help your business grow efficiently and sustainably.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-50 pt-28 lg:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // key changes with slide index
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {slides[index].title} <br />
                <span className="text-[#B71C1C]">{slides[index].subtitle}</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                {slides[index].description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-lg bg-[#B71C1C] text-white font-semibold shadow hover:bg-red-800 transition"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg border border-[#B71C1C] text-[#B71C1C] font-semibold hover:bg-[#B71C1C] hover:text-white transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Slideshow */}
        <div className="flex-1 relative h-[400px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].src}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[index].src}
                alt={slides[index].alt}
                fill
                className="rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Accent Shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#B71C1C] rounded-full blur-3xl"
      />
    </section>
  );
}
