"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        // Store only the adminToken (matches useAuth)
        localStorage.setItem("adminToken", data.token);

        toast.success("Login successful!", { autoClose: 1500 });

        // Navigate to dashboard
        setTimeout(() => router.replace("/admin/dashboard"), 1500);
      } else {
        toast.error(data.error || "Invalid credentials", { autoClose: 3000 });
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Login failed — server unreachable", { autoClose: 3000 });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-[#B71C1C] mb-4">Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#B71C1C] text-white py-2 rounded-lg font-semibold hover:bg-[#A01919] transition"
        >
          Login
        </button>
      </form>

      <ToastContainer position="top-right" />
    </div>
  );
}
