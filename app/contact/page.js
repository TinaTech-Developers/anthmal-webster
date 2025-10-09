"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import MainLayout from "../components/mainlayout";
import WebLayout from "../components/WebLayout";

export default function ContactPage() {
  return (
    <WebLayout>
      <MainLayout
        title={"   Get in Touch"}
        subtitle={
          "Have questions, need advice, or want to discuss how we can support your business? We’d love to hear from you."
        }
        backgroundImage={
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
        }
      >
        <section className="bg-white text-gray-800">
          {/* Contact Section */}
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-10 rounded-2xl shadow-md border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#B71C1C] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B71C1C]/40 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B71C1C]/40 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What’s this about?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B71C1C]/40 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B71C1C]/40 transition resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#B71C1C] text-white px-6 py-3 rounded-lg shadow hover:bg-[#9E1414] transition font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#B71C1C] mb-4">
                  Contact Details
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You can reach us through the details below, or visit our
                  offices for a one-on-one consultation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#B71C1C] w-6 h-6" />
                    <span className="text-gray-700">+263 77 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#B71C1C] w-6 h-6" />
                    <span className="text-gray-700">
                      info@anthmalwebster.co.zw
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-[#B71C1C] w-6 h-6" />
                    <span className="text-gray-700">
                      12 Jason Moyo Ave, Harare, Zimbabwe
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8187871838563!2d31.045278315205567!3d-17.8292152878251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4b0d34b3dbd%3A0xd607b1b3d6b44d70!2sHarare!5e0!3m2!1sen!2szw!4v1709111111111"
                  width="100%"
                  height="280"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
      </MainLayout>
    </WebLayout>
  );
}
