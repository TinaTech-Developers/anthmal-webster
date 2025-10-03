"use client";

import { motion } from "framer-motion";

const elements = [
  {
    title: "Mission",
    description: "Helping businesses grow with expert financial advice.",
  },
  {
    title: "Vision",
    description: "To be the most trusted Chartered Accountants firm.",
  },
  { title: "Values", description: "Integrity, Excellence, Reliability." },
  {
    title: "Our Team",
    description: "Dedicated experts ready to support your business.",
  },
];

export default function WhoWeAreRadial() {
  return (
    <section className="relative bg-gray-50 py-32 flex justify-center items-center">
      {/* Central Circle */}
      <motion.div
        className="relative w-64 h-64 rounded-full bg-[#B71C1C] flex items-center justify-center text-white shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-center px-4">Anthmal Webster</h2>
      </motion.div>

      {/* Surrounding Circles */}
      {elements.map((el, i) => {
        const angle = (i / elements.length) * 360; // even distribution around circle
        const radius = 200; // distance from center
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <motion.div
            key={el.title}
            className="absolute w-40 h-40 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:scale-105 transition-transform"
            style={{
              top: `calc(50% + ${y}px - 80px)`,
              left: `calc(50% + ${x}px - 80px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h3 className="font-semibold text-gray-900">{el.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{el.description}</p>
          </motion.div>
        );
      })}
    </section>
  );
}
