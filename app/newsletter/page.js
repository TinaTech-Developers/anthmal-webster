"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import WebLayout from "../components/WebLayout";
import MainLayout from "../components/mainlayout";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscribeForm from "./components/subscriber";

export default function NewsletterPage() {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const res = await fetch("/api/newsletter", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch newsletters");
        }

        const data = await res.json();
        setNewsletters(data);
      } catch (err) {
        console.error(err);
        setError("Could not load newsletters");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  const featured = newsletters[0];
  const articles = newsletters.slice(1);

  return (
    <WebLayout>
      <MainLayout
        title="Be the First to Know"
        subtitle="Subscribe to our newsletter and get the latest news, special updates, and valuable insights — all in one place."
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
      >
        <section className="min-h-screen bg-white py-24 px-6">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-sm font-extrabold text-[#B71C1C] uppercase tracking-tight">
              The Anthmal Webster Journal
            </h1>
            <p className="mt-2 text-gray-700 text-lg leading-relaxed">
              Expert insights, business stories, and strategic financial
              thinking — curated by our professionals to keep you informed and
              inspired.
            </p>
          </motion.div>

          {loading ? (
            <p className="text-center text-gray-500">Loading newsletters...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : newsletters.length === 0 ? (
            <p className="text-center text-gray-600">No newsletters found.</p>
          ) : (
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left - Main content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Featured article */}
                {featured && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden shadow-lg relative group"
                  >
                    <div className="relative w-full h-[420px]">
                      <Image
                        src={featured.image || "/placeholder.jpg"}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <Tag size={16} className="text-[#B71C1C]" />
                          <span className="text-sm uppercase tracking-wider">
                            {featured.category}
                          </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                          {featured.title}
                        </h2>
                        <p className="text-gray-200 mb-4">
                          {featured.description}
                        </p>
                        <Link
                          href={`/newsletter/${featured._id}`}
                          className="bg-[#B71C1C] hover:bg-[#A01919] text-white px-5 py-2 rounded-full font-semibold transition"
                        >
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Recent articles */}
                <div className="grid sm:grid-cols-2 gap-10">
                  {articles.map((item, index) => (
                    <motion.div
                      key={item._id || index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative w-full h-48">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                          <Calendar size={14} /> {item.date}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <span className="inline-block text-[#B71C1C] text-sm font-semibold uppercase mb-3">
                          {item.category}
                        </span>

                        {/* Read More button */}
                        <div className="mt-auto">
                          <Link
                            href={`/newsletter/${item._id}`}
                            className="inline-block text-[#B71C1C] font-semibold hover:underline hover:text-[#A01919] transition"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Sidebar */}
              <aside className="space-y-10">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {[...new Set(newsletters.map((n) => n.category))].map(
                      (cat, index) => (
                        <li key={index}>
                          <button className="w-full text-left text-gray-700 hover:text-[#B71C1C] font-medium transition">
                            {cat}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <SubscribeForm />

                {/* <div className="bg-[#B71C1C]/5 border border-[#B71C1C]/20 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Subscribe to Updates
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Get our monthly insights delivered straight to your inbox.
                  </p>
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!email) return;

                      try {
                        const res = await fetch("/api/subscribers", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ email }),
                        });

                        const data = await res.json();

                        if (!res.ok)
                          throw new Error(data?.error || "Failed to subscribe");

                        toast.success("Subscribed successfully!");
                        setEmail(""); // clear input
                      } catch (err) {
                        console.error(err);
                        toast.error(
                          err.message || "Error subscribing, try again."
                        );
                      }
                    }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B71C1C] outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#B71C1C] text-white py-3 rounded-xl font-semibold hover:bg-[#A01919] transition"
                    >
                      Subscribe
                    </button>
                  </form> */}

                {/* Toast container */}
                {/* <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
                </div> */}
              </aside>
            </div>
          )}
        </section>
      </MainLayout>
    </WebLayout>
  );
}
