"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Corporate Governance",
    description:
      "Expert guidance on corporate governance matters and support with regulatory compliance under the COBE Act and NCCGZ.",
    image:
      "https://cdn.azeusconvene.com/wp-content/uploads/image1_Principles-of-Corporate-Governance.jpg",
    related: [
      "Audit & Assurance",
      "Business Advisory",
      "Payroll & HR Consulting",
    ],
  },
  {
    title: "Financial Reporting",
    description:
      "Sustainability reporting, IFRS & IPSAS compliance, preparation of financial statements, and accounting systems advisory.",
    image:
      "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_ca/blog/images/importance-financial-reports-photo-qbo-ca-desktop.jpeg",
    related: [
      "Accounting & Bookkeeping",
      "Audit & Assurance",
      "Business Advisory",
    ],
  },
  {
    title: "Tax",
    description:
      "Comprehensive tax services including income tax, VAT, compliance reviews, tax planning, transfer pricing, and support on audits.",
    image: "/tax.jpg",
    related: [
      "Accounting & Bookkeeping",
      "Financial Reporting",
      "Business Advisory",
    ],
  },
];

export default function FancyServicesV2() {
  return (
    <section className="relative w-full bg-gray-50 py-24 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#B71C1C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-[#B71C1C]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-6 mb-20"
      >
        <h2 className="text-sm font-extrabold text-[#B71C1C] uppercase tracking-widest">
          Our Services
        </h2>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          What We Offer
        </h1>
        <p className="mt-4 text-gray-600 sm:text-lg">
          We provide a range of expert financial services designed to help your
          business grow efficiently and sustainably.
        </p>
      </motion.div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {services.map((service, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-8 ${
                isLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative lg:w-1/2 w-full h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card */}
              <div className="lg:w-1/2 bg-white shadow-2xl rounded-3xl p-10 transform hover:-translate-y-2 transition-all z-20">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <button className="mt-6 px-6 py-3 rounded-lg bg-[#B71C1C] text-white font-semibold shadow-lg hover:bg-red-800 transition">
                  Learn More
                </button>

                {/* Related Services */}
                {service.related && service.related.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-[#B71C1C] mb-3">
                      Related Services
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.related.map((rel, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#B71C1C]/10 text-[#B71C1C] rounded-full text-sm font-medium"
                        >
                          {rel}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative shape */}
              <div
                className={`absolute -top-8 ${
                  isLeft ? "-left-8" : "-right-8"
                } w-24 h-24 bg-[#B71C1C]/10 rounded-full blur-2xl pointer-events-none`}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
