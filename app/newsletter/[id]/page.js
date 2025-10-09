"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import WebLayout from "@/app/components/WebLayout";
import MainLayout from "@/app/components/mainlayout";

export default function NewsletterDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/newsletter/${id}`);
        if (!res.ok) throw new Error("Failed to fetch article");
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        setError("Could not load article");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Article not found.
      </div>
    );

  return (
    <WebLayout>
      <MainLayout
        title={article.title}
        subtitle={article.category}
        backgroundImage={article.image}
      >
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 text-gray-600 text-sm mb-3">
                <Calendar size={16} />
                <span>{article.date}</span>
                <span>•</span>
                <Tag size={16} className="text-[#B71C1C]" />
                <span className="font-semibold text-[#B71C1C]">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Article content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            >
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500">
              <p className="text-sm">
                © {new Date().getFullYear()} Anthmal Webster — All Rights
                Reserved
              </p>
            </div>
          </div>
        </section>
      </MainLayout>
    </WebLayout>
  );
}
