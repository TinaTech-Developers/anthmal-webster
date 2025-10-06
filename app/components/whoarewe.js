"use client";

import { motion } from "framer-motion";

const elements = [
  {
    title: "Mission",
    description:
      "To deliver professional and practical financial solutions that empower our clients to make sound business decisions.",
  },
  {
    title: "Vision",
    description:
      "To be the leading firm of Chartered Accountants recognized for trust, innovation, and excellence.",
  },
  {
    title: "Our Team",
    description:
      "A dynamic group of dedicated experts committed to driving your financial success.",
  },
  {
    title: "Values",
    description: "Integrity • Professionalism • Collaboration • Excellence",
  },
];

export default function WhoWeAreTimeline() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B71C1C]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B71C1C]/5 rounded-full blur-3xl -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl"
      >
        <div className="text-center">
          <h2 className="text-4xl sm:text-sm font-extrabold text-[#B71C1C] tracking-tight relative inline-block">
            <span className="relative z-10 uppercase">About Us</span>
          </h2>
          <h1 className="capitalize text-2xl md:text-3xl text-black font-bold mt-2">
            Who are We
          </h1>
        </div>

        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#B71C1C]">Anthmal Webster</span>,
          we are driven by a passion for excellence, integrity, and innovation.
          Our commitment is to empower clients with reliable financial solutions
          and trusted advisory services that inspire growth and confidence.
        </p>
      </motion.div>

      <div className="relative max-w-4xl w-full">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#B71C1C]/30"></div>

        {elements.map((el, i) => (
          <motion.div
            key={el.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`relative flex flex-col sm:flex-row ${
              i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            } mb-16`}
          >
            <div
              className={`sm:w-1/2 ${
                i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
              }`}
            >
              <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[#B71C1C] text-xl font-semibold mb-2">
                  {el.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {el.description}
                </p>
              </div>
            </div>

            {/* Connector dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#B71C1C] w-5 h-5 rounded-full border-4 border-white shadow-lg"></div>
          </motion.div>
        ))}

        {/* Center Anthmal Webster card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#B71C1C] text-white text-center rounded-3xl shadow-2xl p-10 mt-8 mx-auto w-full sm:w-2/3"
        >
          <h3 className="text-2xl font-bold">Anthmal Webster</h3>
          <p className="mt-3 text-base opacity-90">
            Chartered Accountants & Business Advisors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
