"use client";

import { motion } from "framer-motion";

const elements = [
  {
    value: "M",
    title: "Mission",
    description:
      "To deliver professional and practical financial solutions that empower our clients to make sound business decisions.",
  },
  {
    value: "V",
    title: "Vision",
    description:
      "To be the leading firm of Chartered Accountants recognized for trust, innovation, and excellence.",
  },
  {
    value: "T",
    title: "Our Team",
    description:
      "A dynamic group of dedicated experts committed to driving your financial success.",
  },
  {
    value: "V",
    title: "Values",
    description: "Integrity • Professionalism • Collaboration • Excellence",
  },
];

export default function WhoWeAreTimeline() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Decorative background shapes */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-[#B71C1C]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B71C1C]/5 rounded-full blur-3xl -z-10"></div> */}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-5xl"
      >
        <div className="text-center">
          <h2 className=" sm:text-sm font-extrabold text-[#B71C1C] tracking-tight relative inline-block">
            <span className="relative z-10 uppercase text-sm">About Us</span>
          </h2>
          <h1 className="capitalize text-2xl md:text-3xl text-black font-bold mt-2">
            Who are We
          </h1>
        </div>

        <p className="paragraph mt-6 text-gray-700 text-base sm:text-lg leading-relaxed w-full">
          <span className="font-semibold text-[#B71C1C]">Anthmal Webster</span>,
          has a rich history dating back to November 2019, founded on a shared
          vision by its five partners to establish a global network of
          independently owned and managed accountancy firms. With a steadfast
          commitment to delivering exceptional client services, the firm
          operates underpinned by its core values: Client Dedication, unwavering
          Ethical Standards, uncompromising Quality Services, and a relentless
          pursuit of Value Addition. Inspired by the trust and support of its
          stakeholders, Anthmal Webster continually strives to elevate its
          standards, pushing the boundaries of excellence in the accountancy
          profession.
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

            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#B71C1C] text-white font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg border-4 border-white">
              {el.value}
            </div>
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
      {/* <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-[#B71C1C] mb-8">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          We provide tailored financial and advisory solutions designed to help
          your business grow sustainably.
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Audit & Assurance",
              desc: "Comprehensive audit services ensuring transparency and compliance.",
            },
            {
              title: "Tax Consulting",
              desc: "Expert guidance to optimize your tax strategies and minimize liabilities.",
            },
            {
              title: "Business Advisory",
              desc: "Practical insights and strategic advice to drive business success.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-[#B71C1C] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}
    </section>
  );
}
