"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CalendarDays,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewModal, setViewModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const { user, loading: authLoading } = useAuth();
  const rowsPerPage = 10;

  // Fetch subscribers from backend
  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/subscribers");
      const data = await res.json();
      setSubscribers(data);
    } catch (err) {
      console.error("Failed to fetch subscribers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const totalPages = Math.ceil(subscribers.length / rowsPerPage);
  const paginatedSubscribers = subscribers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/subscribers/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setSubscribers(subscribers.filter((sub) => sub._id !== id));
        setDeleteModal(null);
      } else {
        console.error("Failed to delete subscriber");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      {authLoading ? (
        <p>Checking authentication...</p>
      ) : !user ? (
        <p>You must be logged in to view this page.</p>
      ) : (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="text-[#B71C1C]" size={30} />
              Newsletter Subscribers
            </h1>
            <span className="text-gray-600 text-sm">
              Total: {subscribers.length}
            </span>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border text-base border-gray-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse text-base">
                <thead className="bg-[#B71C1C] text-white text-sm uppercase">
                  <tr className="text-sm">
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Date Subscribed</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {loading ? (
                      <tr className="text-sm">
                        <td
                          colSpan="4"
                          className="text-center py-8 text-gray-500"
                        >
                          Loading subscribers...
                        </td>
                      </tr>
                    ) : paginatedSubscribers.length > 0 ? (
                      paginatedSubscribers.map((sub, index) => (
                        <motion.tr
                          key={sub._id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="border-b hover:bg-gray-50 text-sm transition"
                        >
                          <td className="py-4 px-6 text-gray-700">
                            {(currentPage - 1) * rowsPerPage + index + 1}
                          </td>
                          <td className="py-4 px-6 font-medium text-gray-900">
                            {sub.email}
                          </td>
                          <td className="py-4 px-6 text-gray-600 flex items-center gap-2">
                            <CalendarDays size={14} />
                            {new Date(sub.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="flex justify-center gap-3">
                              <button
                                onClick={() => setViewModal(sub)}
                                className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                onClick={() => setDeleteModal(sub)}
                                className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center py-10 text-gray-500"
                        >
                          No subscribers found.
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {!loading && subscribers.length > rowsPerPage && (
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    currentPage === 1
                      ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                      : "text-[#B71C1C] bg-white border hover:bg-gray-100"
                  }`}
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    currentPage === totalPages
                      ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                      : "text-[#B71C1C] bg-white border hover:bg-gray-100"
                  }`}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            )}
          </motion.div>

          {/* VIEW MODAL */}
          <AnimatePresence>
            {viewModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white rounded-2xl p-6 w-96 relative shadow-xl"
                >
                  <button
                    onClick={() => setViewModal(null)}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                  <h2 className="text-xl font-bold mb-4 text-gray-900">
                    Subscriber Details
                  </h2>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> {viewModal.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Date Subscribed:</strong>{" "}
                    {new Date(viewModal.createdAt).toLocaleDateString()}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DELETE CONFIRM MODAL */}
          <AnimatePresence>
            {deleteModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white rounded-2xl p-6 w-96 relative shadow-xl"
                >
                  <button
                    onClick={() => setDeleteModal(null)}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                  <h2 className="text-xl font-bold mb-4 text-gray-900">
                    Confirm Delete
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Are you sure you want to delete{" "}
                    <strong>{deleteModal.email}</strong> from subscribers?
                  </p>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setDeleteModal(null)}
                      className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDelete(deleteModal._id)}
                      className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}
    </DashboardLayout>
  );
}
