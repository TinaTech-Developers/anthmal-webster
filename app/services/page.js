"use client";

import { motion } from "framer-motion";
import ServicesShowcase from "./_components/services";
import ServicesGrid from "./_components/services";
import FAQSection from "./_components/faqsection";
import MainLayout from "../components/mainlayout";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Delivering independent, objective assurance services designed to add value and improve your organization’s operations.",
    icon: "📊",
  },
  {
    title: "Tax Advisory",
    description:
      "Providing comprehensive tax planning and compliance services to optimize your tax efficiency and minimize liabilities.",
    icon: "💼",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Reliable and accurate accounting services that keep your financial records transparent and compliant.",
    icon: "🧾",
  },
  {
    title: "Business Consulting",
    description:
      "Strategic business advisory helping you navigate complex decisions and achieve sustainable growth.",
    icon: "📈",
  },
  {
    title: "Company Secretarial",
    description:
      "Ensuring your company meets all statutory and regulatory requirements through diligent compliance management.",
    icon: "📜",
  },
  {
    title: "Payroll Management",
    description:
      "Efficient payroll services designed to streamline processes and guarantee compliance with employment laws.",
    icon: "💰",
  },
];

export default function ServicesPage() {
  return (
    <MainLayout
      title={"Our Services"}
      subtitle={
        "Professional. Reliable. Tailored to your needs — discover how Anthmal Webster empowers businesses through expertise and trust."
      }
      backgroundImage={
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
      }
    >
      <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <ServicesGrid />
        {/* ✅ CTA Section */}
        <section className="relative py-24 bg-[#B71C1C] text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto px-6"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Let’s Build Something Great Together
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Whether you’re seeking expert financial advice or a long-term
              partner for your business journey, our dedicated team is here to
              help you achieve success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#B71C1C] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </section>
        <FAQSection />
      </main>
    </MainLayout>
  );
}
