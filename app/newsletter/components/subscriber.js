"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Failed to subscribe");

      toast.success("Subscribed successfully!");
      setEmail(""); // clear input
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error subscribing, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#B71C1C]/5 border border-[#B71C1C]/20 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Subscribe to Updates
      </h3>
      <p className="text-gray-600 mb-4 text-sm">
        Get our monthly insights delivered straight to your inbox.
      </p>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
          disabled={loading}
          className={`bg-[#B71C1C] text-white py-3 rounded-xl font-semibold hover:bg-[#A01919] transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Toast container must be rendered */}
      <ToastContainer
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
    </div>
  );
}
