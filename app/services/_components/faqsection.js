"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a full range of accounting, audit, tax, and business advisory services tailored to individuals, SMEs, and large organizations.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely. We have dedicated solutions for startups and SMEs — helping them establish strong financial foundations and ensure compliance from day one.",
  },
  {
    question: "Can you handle tax compliance and planning?",
    answer:
      "Yes. Our tax experts ensure you meet all regulatory requirements while developing strategies to optimize your tax efficiency.",
  },
  {
    question: "How do we get started working with you?",
    answer:
      "Simply contact our team for an initial consultation. We’ll discuss your goals, assess your needs, and tailor a proposal that fits your business.",
  },
  {
    question: "Are your services customizable?",
    answer:
      "Yes. Every service we provide can be customized to suit your specific business model, industry, and objectives.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
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
          <h2 className="sm:text-sm font-extrabold text-[#B71C1C] tracking-tight relative inline-block">
            <span className="relative z-10 text-sm uppercase">
              have questions
            </span>
          </h2>
          <h1 className="capitalize text-xl md:text-3xl text-black font-bold mt-2">
            Frequently Asked Questions
          </h1>
        </div>

        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed w-full">
          {
            " Find answers to common questions about our services, process, and working approach. Still unsure? Reach out — we’d love to help."
          }
        </p>
      </motion.div>

      {/* Full-width FAQ items */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-8 py-5 text-left"
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
                  <div className="px-8 pb-5 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100">
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
