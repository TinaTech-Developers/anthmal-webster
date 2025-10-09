"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NewsletterForm from "../components/newsletterform";
import NewsletterTable from "../components/newslettertable";
import DashboardLayout from "../components/DashboardLayout";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function NewsletterDashboard() {
  const [newsletters, setNewsletters] = useState([]);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const addNewsletter = (newEntry) => {
    setNewsletters([newEntry, ...newsletters]);
  };

  const deleteNewsletter = (index) => {
    setNewsletters(newsletters.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      {authLoading ? (
        <p>Checking authentication...</p>
      ) : !user ? (
        <p>You must be logged in to view this page.</p>
      ) : (
        <main className="min-h-screen bg-gray-50 px-6 pb-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-xl font-bold text-[#B71C1C] mb-2">
              Newsletter Dashboard
            </h1>
            <p className="text-gray-600">
              Manage your published newsletters and add new articles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Left: Form */}
            <NewsletterForm onSubmit={addNewsletter} />

            {/* Right: Table */}
            <NewsletterTable data={newsletters} onDelete={deleteNewsletter} />
          </div>
        </main>
      )}
    </DashboardLayout>
  );
}
