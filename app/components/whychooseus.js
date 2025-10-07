"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Award, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#B71C1C]" />,
      title: "Client Dedication",
      description:
        "We go beyond numbers to deliver personalized, value-driven solutions that foster lasting partnerships.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#B71C1C]" />,
      title: "Ethical Standards",
      description:
        "Integrity guides every decision we make. We uphold the highest ethical principles in all engagements.",
    },
    {
      icon: <Award className="w-7 h-7 text-[#B71C1C]" />,
      title: "Quality Services",
      description:
        "Our team provides precise, reliable, and forward-thinking services that meet global standards of excellence.",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-[#B71C1C]" />,
      title: "Value Addition",
      description:
        "We continuously innovate and adapt to bring measurable value to every client, driving growth and sustainability.",
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="text-sm font-extrabold text-[#B71C1C] tracking-tight uppercase">
            Why choose us?
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose <span className="text-[#B71C1C]">Anthmal Webster?</span>
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Founded in <strong>November 2019</strong> by five visionary
            partners, Anthmal Webster was built to unite independently owned
            accountancy firms under one global network. Guided by integrity,
            excellence, and innovation, we continue to redefine professional
            service standards across the financial landscape.
          </p>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex-shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="font-semibold text-black text-lg mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - EXACT STYLE IMAGE FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Background gradient frame */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-gradient-to-b from-[#B71C1C] to-white w-[420px] md:w-[500px] h-[460px] md:h-[670px] rounded-[40px] rounded-tl-[120px] shadow-inner" />
          </div>

          {/* Foreground white card with image */}
          <div className="relative z-10 w-[380px] md:w-[480px] h-[420px] md:h-[640px] overflow-hidden rounded-[40px] rounded-tl-[120px] bg-white shadow-xl border border-[#B71C1C]/20">
            <Image
              src="/whychooseus.jpg" // replace with your image path
              alt="Anthmal Webster team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
