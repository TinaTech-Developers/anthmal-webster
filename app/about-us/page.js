"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import MainLayout from "../components/mainlayout";
import AboutFAQ from "./_components/aboutfaq";

export default function AboutUsPage() {
  return (
    <MainLayout
      title={"  About Anthmal Webster"}
      subtitle={
        "Chartered Accountants & Business Advisors — driven by integrity, professionalism, and innovation."
      }
      backgroundImage={
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
      }
    >
      <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
        {/* 💼 Who We Are Section */}
        <section className="py-24 px-6 text-center bg-white relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <div className="text-center">
              <h2 className="text-4xl sm:text-sm font-extrabold text-[#B71C1C] tracking-tight relative inline-block">
                <span className="relative z-10 uppercase">about us</span>
              </h2>
              <h1 className="capitalize text-2xl md:text-3xl text-black font-bold mt-2">
                Who Are We
              </h1>
            </div>

            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed w-full md:px-10">
              {
                "   Anthmal Webster is a trusted accounting and advisory firm, founded in November 2019 by five partners with a shared vision to establish a global network of independently owned and managed accountancy firms. Committed to empowering individuals and organizations to make informed financial decisions, the firm operates with integrity, innovation, and excellence, guided by its core values of client dedication, unwavering ethical standards, uncompromising quality services, and a relentless pursuit of value addition. Inspired by the trust and support of its stakeholders, Anthmal Webster continually strives to elevate its standards, pushing the boundaries of excellence in the accountancy profession while delivering exceptional client service."
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Mission",
                desc: "To deliver professional and practical financial solutions that empower our clients to make sound business decisions.",
                icon: <Target className="w-10 h-10 text-[#B71C1C]" />,
              },
              {
                title: "Vision",
                desc: "To be the leading firm of Chartered Accountants recognized for trust, innovation, and excellence.",
                icon: <Lightbulb className="w-10 h-10 text-[#B71C1C]" />,
              },
              {
                title: "Values",
                desc: "Integrity • Professionalism • Collaboration • Excellence",
                icon: <Heart className="w-10 h-10 text-[#B71C1C]" />,
              },
              {
                title: "Our Team",
                desc: "A dynamic group of experts committed to your financial success.",
                icon: <Users className="w-10 h-10 text-[#B71C1C]" />,
              },
            ].map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center"
              >
                <div className="flex justify-center mb-4">{el.icon}</div>
                <h3 className="text-xl font-semibold text-[#B71C1C] mb-2">
                  {el.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {el.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔍 Our Approach Section */}
        <section className="py-24 bg-gray-50 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B71C1C]/10 blur-3xl rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#B71C1C]/10 blur-3xl rounded-full -z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center mx-auto text-center mb-16 max-w-5xl"
          >
            <h2 className="text-sm font-extrabold text-[#B71C1C] tracking-tight uppercase">
              Our Approach
            </h2>
            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-black capitalize">
              The Journey We Take Together
            </h1>
            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our journey with you is guided by collaboration and precision —
              taking your goals from insight to measurable success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We start by listening and analyzing your business goals and financial landscape.",
              },
              {
                step: "02",
                title: "Strategize",
                desc: "We design custom strategies that address your unique challenges with practical, actionable insight.",
              },
              {
                step: "03",
                title: "Deliver",
                desc: "We execute with precision, continuously optimizing and ensuring sustainable growth.",
              },
            ].map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl text-center"
              >
                <div className="text-[#B71C1C] text-4xl font-extrabold mb-2">
                  {el.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {el.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {el.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ❤️ CTA Section */}
        <section className="relative py-24 bg-[#B71C1C] text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto px-6"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Partner With Us for Success
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Together, we can strengthen your business foundation and unlock
              greater opportunities. Let’s grow your success story — with
              numbers that speak.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#B71C1C] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </section>
      </main>
      <AboutFAQ />
    </MainLayout>
  );
}
