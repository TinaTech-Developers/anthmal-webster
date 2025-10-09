"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { FileText, PieChart, BarChart4, Briefcase, Users } from "lucide-react";

const services = [
  {
    title: "Corporate Governance",
    description:
      "Expert guidance and compliance support under the COBE Act and NCCGZ.",
    details: [
      "Guidance on corporate governance matters",
      "Support with regulatory compliance",
    ],
    icon: <FileText className="w-6 h-6" />,
    fullDescription: `
      We provide comprehensive corporate governance advisory to help your company
      meet regulatory standards and implement best practices. Our team ensures
      compliance with COBE Act and NCCGZ requirements while strengthening
      internal governance frameworks.
    `,
    highlights: [
      "Regulatory compliance under COBE & NCCGZ",
      "Board advisory & corporate policies",
      "Risk management guidance",
    ],
  },
  {
    title: "Financial Reporting",
    description:
      "Accurate reporting and implementation of financial standards.",
    details: [
      "Sustainability Reporting",
      "Implementation of Financial Reporting Standards",
      "Review of Financial Statements for IFRS & IPSAS compliance",
      "Preparation of Financial Statements",
      "Accounting Systems Advisory",
    ],
    icon: <BarChart4 className="w-6 h-6" />,
    fullDescription: `
      Our Financial Reporting services help organizations maintain accuracy
      and compliance. We assist with IFRS, IPSAS, sustainability reporting, and
      system advisory to ensure transparent and actionable financial data.
    `,
    highlights: [
      "IFRS & IPSAS compliance",
      "Financial statement preparation",
      "Accounting system advisory",
      "Sustainability reporting",
    ],
  },
  {
    title: "Tax",
    description: "Comprehensive tax services for compliance and planning.",
    details: [
      "Income Tax",
      "Value Added Tax (VAT)",
      "Compliance Reviews",
      "Tax Planning",
      "Transfer Pricing",
      "Support on Tax Audits",
      "Customs and Excise",
    ],
    icon: <PieChart className="w-6 h-6" />,
    fullDescription: `
      Our Tax services cover all aspects of local and international taxation,
      including income tax, VAT, transfer pricing, and audit support. We help
      clients plan strategically while remaining fully compliant with regulations.
    `,
    highlights: [
      "Income Tax & VAT compliance",
      "Transfer pricing advisory",
      "Audit and tax review support",
      "Customs & excise advisory",
    ],
  },
];

export default function ServicesShowcase() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative bg-white text-gray-800">
      {/* Top Section */}
      <div className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Sidebar */}
        <div className="space-y-3 bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#B71C1C] mb-4">Solutions</h2>
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                selected === i
                  ? "bg-[#B71C1C]/10 text-[#B71C1C] border border-[#B71C1C]/30"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <div
                className={`${
                  selected === i ? "text-[#B71C1C]" : "text-gray-400"
                }`}
              >
                {service.icon}
              </div>
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4 text-[#B71C1C]">
            {services[selected].icon}
            <h3 className="text-2xl font-semibold text-gray-900">
              {services[selected].title}
            </h3>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {services[selected].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services[selected].details.map((item, j) => (
              <div key={j}>
                <p className="font-semibold text-[#B71C1C] flex items-center gap-2">
                  ✅ {item.split(" ")[0]}
                </p>
                <p className="text-gray-600 text-sm mt-1">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Extended Description */}
      <motion.div
        key={`desc-${selected}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 bg-gray-50 border-t border-gray-200 py-16 px-6 lg:px-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#B71C1C] mb-6">
            More About {services[selected].title}
          </h3>
          <p className="text-gray-700 leading-relaxed sm:text-lg mb-10">
            {services[selected].fullDescription}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services[selected].highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#B71C1C]/40 transition-all"
              >
                <p className="font-medium text-[#B71C1C] mb-2">•</p>
                <p className="text-gray-700 text-sm">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
