"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const aboutFaqs = [
  {
    question: "What makes Anthmal Webster different?",
    answer:
      "Our strength lies in our personalized approach. We combine technical expertise with a deep understanding of each client’s unique business needs, ensuring solutions that truly add value.",
  },
  {
    question: "Do you only work with large corporations?",
    answer:
      "Not at all. We proudly serve a diverse range of clients — from startups and SMEs to established enterprises — providing tailored financial and advisory services for every stage of growth.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team consists of highly qualified Chartered Accountants and advisors with years of experience across various industries, bringing both technical excellence and practical insight.",
  },
  {
    question: "Where are you based, and do you serve clients remotely?",
    answer:
      "We’re based in [your location], but we partner with clients across regions. Our digital systems make remote collaboration efficient, transparent, and seamless.",
  },
  {
    question: "What are your core values?",
    answer:
      "Integrity, professionalism, collaboration, and excellence — these guide every aspect of our work and relationships with clients.",
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B71C1C]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B71C1C]/5 rounded-full blur-3xl -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="text-center">
          <h2 className=" sm:text-sm font-extrabold text-[#B71C1C] tracking-tight relative inline-block">
            <span className="relative z-10 uppercase text-sm">
              Have Questions?
            </span>
          </h2>
          <h1 className="capitalize text-xl md:text-3xl text-black font-bold mt-2">
            Learn More About Us
          </h1>
        </div>

        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed w-full max-w-3xl mx-auto">
          We believe transparency builds trust. Here are some of the most common
          questions people ask about our firm, services, and approach.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-4">
        {aboutFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-8 py-6 text-left"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-[#B71C1C]" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
