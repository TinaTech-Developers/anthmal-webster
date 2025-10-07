"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Understanding Your Needs",
    description:
      "We begin by immersing ourselves in your business, listening carefully to your goals and challenges to form a clear understanding.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "With insights gathered, we craft tailored strategies that align with your business vision and financial objectives.",
  },
  {
    step: "03",
    title: "Implementation & Collaboration",
    description:
      "Our experts work alongside your team to implement solutions efficiently, ensuring seamless execution and measurable outcomes.",
  },
  {
    step: "04",
    title: "Continuous Growth",
    description:
      "We evaluate results, refine our approach, and provide ongoing support to drive sustainable, long-term success.",
  },
];

export default function OurApproachJourney() {
  return (
    <section className="flex flex-col items-center justify-center relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#B71C1C]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#B71C1C]/5 rounded-full blur-3xl -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-5xl"
      >
        <h2 className="text-sm font-extrabold text-[#B71C1C] tracking-tight uppercase">
          Our Approach
        </h2>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-black capitalize">
          The Journey We Take Together
        </h1>
        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Our journey with you is guided by collaboration and precision — taking
          your goals from insight to measurable success.
        </p>
      </motion.div>

      {/* Steps Section */}
      <div className="w-full flex flex-col sm:flex-row items-center sm:justify-center gap-6 sm:gap-10 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center text-center w-full sm:w-72 relative"
          >
            {/* Step Circle */}
            <div className="bg-[#B71C1C] text-white font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-xl mb-6 relative z-10">
              {step.step}
            </div>

            {/* Horizontal connector (desktop) */}
            {i < steps.length - 1 && (
              <div className="absolute top-7 right-0 w-16 sm:w-36 h-[2px] bg-[#B71C1C]/30 hidden sm:block"></div>
            )}

            {/* Vertical connector (mobile) */}
            {i < steps.length - 1 && (
              <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[2px] h-16 bg-[#B71C1C]/30 sm:hidden"></div>
            )}

            {/* Step Content */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full">
              <h3 className="text-[#B71C1C] text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
