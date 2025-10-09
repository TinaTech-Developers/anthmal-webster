"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "",
    image: "",
    description: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category) {
      setMessage("Title and Category are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Newsletter uploaded successfully!");
        setFormData({
          title: "",
          date: "",
          category: "",
          image: "",
          description: "",
          content: "",
        });
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to upload newsletter.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#B71C1C] mb-6">
        Add New Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <textarea
          name="description"
          placeholder="Short Description"
          rows="2"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        ></textarea>
        <textarea
          name="content"
          placeholder="Full Article Content"
          rows="4"
          value={formData.content}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="w-full bg-[#B71C1C] text-white py-3 rounded-lg font-semibold hover:bg-[#A01919] transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Newsletter"}
        </motion.button>

        {message && (
          <p className="text-center mt-2 text-sm text-gray-700">{message}</p>
        )}
      </form>
    </motion.div>
  );
}
