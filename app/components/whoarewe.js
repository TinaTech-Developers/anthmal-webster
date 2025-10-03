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
  const radiusDesktop = 200; // radius on desktop
  const radiusMobile = 120; // smaller radius for mobile

  return (
    <section className="relative bg-gray-50 pt-32 pb-48 px-6 flex flex-col items-center overflow-hidden">
      {/* Radial Layout */}
      <div className="relative mt-20 w-full max-w-5xl flex justify-center items-center">
        {/* Central Circle */}
        <motion.div
          className="relative w-52 sm:w-56 md:w-64 h-52 sm:h-56 md:h-64 rounded-full bg-[#B71C1C] flex items-center justify-center text-white shadow-2xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center px-4">
            Anthmal Webster
          </h2>
        </motion.div>

        {/* Surrounding Circles */}
        {elements.map((el, i) => {
          const angle = (i / elements.length) * 2 * Math.PI - Math.PI / 2; // rotate -90deg so first item is top
          return (
            <motion.div
              key={el.title}
              className="absolute w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 text-center cursor-pointer hover:scale-105 transition-transform"
              style={{
                top: `calc(50% + ${radiusDesktop * Math.sin(angle)}px - 64px)`,
                left: `calc(50% + ${radiusDesktop * Math.cos(angle)}px - 64px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                {el.title}
              </h3>
              <p className="mt-1 text-gray-600 text-xs sm:text-sm md:text-sm">
                {el.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Adjustments: Stack circles below center */}
      <div className="flex flex-col items-center mt-20 gap-6 md:hidden">
        {elements.map((el) => (
          <div
            key={el.title}
            className="w-40 h-40 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-4 text-center"
          >
            <h3 className="font-semibold text-gray-900 text-base">
              {el.title}
            </h3>
            <p className="mt-1 text-gray-600 text-sm">{el.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
