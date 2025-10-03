"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Accounting Services",
    description:
      "Accurate bookkeeping, financial reporting, and compliance to keep your business on track.",
    image: "/hero1.jpg",
  },
  {
    title: "Tax Planning",
    description:
      "Strategic tax advice to minimize liabilities and maximize savings for your business.",
    image: "/hero2.jpg",
  },
  {
    title: "Financial Consulting",
    description:
      "Expert financial advice tailored to your business goals and growth plans.",
    image: "/hero3.jpg",
  },
  {
    title: "Business Solutions",
    description:
      "Custom solutions for business growth, budgeting, and operational efficiency.",
    image: "/hero1.jpg",
  },
];

export default function FancyServices() {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Background shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#B71C1C] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#B71C1C] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 text-center max-w-2xl mx-auto"
        >
          We provide a range of expert financial services to help your business
          grow efficiently.
        </motion.p>

        <div className="mt-16 flex flex-col gap-16">
          {services.map((service, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative lg:w-1/2 w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                  <button className="mt-6 px-6 py-3 rounded-lg bg-[#B71C1C] text-white font-semibold shadow hover:bg-red-800 transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
