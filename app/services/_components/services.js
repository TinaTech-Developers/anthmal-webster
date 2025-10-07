"use client";

import { motion } from "framer-motion";
import { FileText, PieChart, BarChart4, Briefcase, Users } from "lucide-react";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Providing clarity and confidence through independent audits that enhance transparency and decision-making.",
    icon: <FileText className="w-10 h-10 text-[#B71C1C]" />,
  },
  {
    title: "Tax Advisory",
    description:
      "Delivering strategic tax guidance to help you stay compliant and maximize your financial efficiency.",
    icon: <PieChart className="w-10 h-10 text-[#B71C1C]" />,
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate, efficient financial records that give you peace of mind and focus to grow your business.",
    icon: <BarChart4 className="w-10 h-10 text-[#B71C1C]" />,
  },
  {
    title: "Business Advisory",
    description:
      "Insightful business consulting to refine strategies, improve performance, and unlock growth potential.",
    icon: <Briefcase className="w-10 h-10 text-[#B71C1C]" />,
  },
  {
    title: "Payroll & HR Consulting",
    description:
      "Seamless HR and payroll services designed to ensure compliance, confidentiality, and accuracy.",
    icon: <Users className="w-10 h-10 text-[#B71C1C]" />,
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/finance-bg.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-gray-50/90"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="text-center">
          <h2 className="text-4xl sm:text-sm font-extrabold text-[#B71C1C] tracking-tight relative inline-block">
            <span className="relative z-10 uppercase">our services</span>
          </h2>
          <h1 className="capitalize text-2xl md:text-3xl text-black font-bold mt-2">
            What We Do
          </h1>
        </div>

        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed w-full">
          {
            "   We provide a complete suite of professional services tailored to your business needs — combining expertise, innovation, and integrity."
          }
        </p>
      </motion.div>

      {/* Heading */}
      {/* <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-16 z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#B71C1C] relative inline-block uppercase">
          <span className="relative z-10">Our Services</span>
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#B71C1C]/30 rounded-full"></span>
        </h2>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"></p>
      </motion.div> */}

      {/* Services grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white/90 border border-gray-100 backdrop-blur-md rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#B71C1C] mb-2 group-hover:underline underline-offset-4 decoration-[#B71C1C]/60">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
