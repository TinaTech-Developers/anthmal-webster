"use client";

import { Plus, Eye, Edit2, Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardHome() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth(); // always at top

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modals state
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
    description: "",
    content: "",
  });

  // Fetch newsletters
  const fetchNewsletters = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter");
      const data = await res.json();
      setNewsletters(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsletters();
  }, []);

  // Handle changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle update
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`/api/newsletter/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to update");
      await fetchNewsletters();
      setEditModal(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/newsletter/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchNewsletters();
      setDeleteModal(null);
    } catch (err) {
      console.error(err);
    }
  };

  const totalNewsletters = newsletters.length;
  const categories = [...new Set(newsletters.map((n) => n.category))].length;

  return (
    <DashboardLayout>
      {authLoading ? (
        <p>Checking authentication...</p>
      ) : !user ? (
        <p>You must be logged in to view this page.</p>
      ) : (
        <div className="w-full space-y-8 bg-gray-50 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={() => router.push("/admin/newsletter")}
              className="flex items-center gap-2 bg-[#B71C1C] text-white px-4 py-2 rounded-lg hover:bg-[#A01919] transition"
            >
              <Plus size={18} />
              Add Newsletter
            </button>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col">
              <span className="text-gray-500">Total Newsletters</span>
              <span className="text-2xl font-bold mt-2">
                {totalNewsletters}
              </span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col">
              <span className="text-gray-500">Categories</span>
              <span className="text-2xl font-bold mt-2">{categories}</span>
            </div>
          </div>

          {/* Recent newsletters */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 overflow-x-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Newsletters
            </h2>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : newsletters.length === 0 ? (
              <p className="text-gray-500">No newsletters found.</p>
            ) : (
              <table className="w-full text-sm text-left border-t border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 uppercase">
                    <th className="py-3 px-4">Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {newsletters.slice(0, 5).map((item) => (
                    <tr
                      key={item._id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {item.title}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {item.category}
                      </td>
                      <td className="py-3 px-4 text-gray-600">{item.date}</td>
                      <td className="py-3 px-4 flex gap-3">
                        <button
                          onClick={() => setViewModal(item)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => {
                            setEditModal(item);
                            setForm({
                              title: item.title || "",
                              date: item.date || "",
                              category: item.category || "",
                              description: item.description || "",
                              content: item.content || "",
                            });
                          }}
                          className="text-yellow-600 hover:text-yellow-800"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => setDeleteModal(item)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* -------------------- MODALS -------------------- */}
          <AnimatePresence>
            {/* VIEW MODAL */}
            {viewModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 bg-opacity-40 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{viewModal.title}</h2>
                    <button onClick={() => setViewModal(null)}>
                      <X className="text-gray-600" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <b>Category:</b> {viewModal.category}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <b>Date:</b> {viewModal.date}
                  </p>
                  <p className="text-gray-700 mt-4">{viewModal.description}</p>
                </motion.div>
              </motion.div>
            )}

            {/* EDIT MODAL */}
            {editModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 bg-opacity-40 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Edit Newsletter</h2>
                    <button onClick={() => setEditModal(null)}>
                      <X className="text-gray-600" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      "title",
                      "category",
                      "date",
                      "description",
                      "content",
                    ].map((field) => (
                      <input
                        key={field}
                        name={field}
                        placeholder={
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        value={form[field] || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#B71C1C] outline-none"
                      />
                    ))}
                    <div className="flex justify-end gap-2 mt-4">
                      <button
                        onClick={() => setEditModal(null)}
                        className="px-4 py-2 border rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleUpdate(editModal._id)}
                        className="px-4 py-2 bg-[#B71C1C] text-white rounded-lg hover:bg-[#A01919]"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* DELETE MODAL */}
            {deleteModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
                >
                  <h2 className="text-lg font-semibold mb-4">
                    Are you sure you want to delete{" "}
                    <span className="text-[#B71C1C] font-bold">
                      {deleteModal.title}
                    </span>
                    ?
                  </h2>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setDeleteModal(null)}
                      className="px-4 py-2 border rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDelete(deleteModal._id)}
                      className="px-4 py-2 bg-[#B71C1C] text-white rounded-lg hover:bg-[#A01919]"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </DashboardLayout>
  );
}
