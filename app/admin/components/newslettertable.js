"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Edit2, Eye } from "lucide-react";
import Image from "next/image";

export default function NewsletterTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Modal states
  const [viewModal, setViewModal] = useState(null); // newsletter to view
  const [editModal, setEditModal] = useState(null); // newsletter to edit
  const [editData, setEditData] = useState({});

  // Fetch newsletters
  const fetchNewsletters = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter");
      const newsletters = await res.json();
      setData(newsletters);
    } catch (err) {
      console.error(err);
      setMessage("Failed to load newsletters.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsletters();
  }, []);

  // Delete newsletter
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this newsletter?")) return;

    try {
      const res = await fetch(`/api/newsletter/${id}`, { method: "DELETE" });
      if (res.ok) {
        setData(data.filter((item) => item._id !== id));
        setMessage("Newsletter deleted successfully.");
      } else {
        const errData = await res.json();
        setMessage(errData.error || "Failed to delete newsletter.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete newsletter.");
    }
  };

  // Handle edit input changes
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Submit edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/newsletter/${editData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (res.ok) {
        setData(
          data.map((item) => (item._id === editData._id ? editData : item))
        );
        setEditModal(null);
        setMessage("Newsletter updated successfully.");
      } else {
        const errData = await res.json();
        setMessage(errData.error || "Failed to update newsletter.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to update newsletter.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 overflow-x-auto"
    >
      <h2 className="text-2xl font-bold text-[#B71C1C] mb-6">
        Uploaded Newsletters
      </h2>

      {message && <p className="text-sm text-gray-700 mb-4">{message}</p>}

      {loading ? (
        <p className="text-gray-500 text-sm">Loading newsletters...</p>
      ) : data.length === 0 ? (
        <p className="text-gray-500 text-sm">No newsletters added yet.</p>
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
            {data.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium text-gray-800">
                  {item.title}
                </td>
                <td className="py-3 px-4 text-gray-600">{item.category}</td>
                <td className="py-3 px-4 text-gray-600">{item.date}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => setViewModal(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setEditModal(item);
                      setEditData(item);
                    }}
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
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

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-xl w-11/12 md:w-2/3 max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-xl font-bold mb-4 text-[#B71C1C]">
              {viewModal.title}
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Category:</strong> {viewModal.category}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Date:</strong> {viewModal.date}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Description:</strong> {viewModal.description}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Content:</strong> {viewModal.content}
            </p>
            {viewModal.image && (
              <Image
                height={300}
                width={500}
                src={viewModal.image}
                alt={viewModal.title}
                className="mt-4 rounded-lg max-h-64 object-cover w-full"
              />
            )}
            <button
              onClick={() => setViewModal(null)}
              className="mt-4 bg-[#B71C1C] text-white px-4 py-2 rounded-lg hover:bg-[#A01919]"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-xl w-11/12 md:w-2/3 max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-xl font-bold mb-4 text-[#B71C1C]">
              Edit Newsletter
            </h3>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input
                name="title"
                value={editData.title}
                onChange={handleEditChange}
                placeholder="Title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 font-medium"
              />
              <input
                name="category"
                value={editData.category}
                onChange={handleEditChange}
                placeholder="Category"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 font-medium"
              />
              <input
                name="date"
                type="date"
                value={editData.date}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 font-medium"
              />
              <input
                name="image"
                value={editData.image}
                onChange={handleEditChange}
                placeholder="Image URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 font-medium"
              />
              <textarea
                name="description"
                value={editData.description}
                onChange={handleEditChange}
                placeholder="Short Description"
                rows="2"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 font-medium"
              />
              <textarea
                name="content"
                value={editData.content}
                onChange={handleEditChange}
                placeholder="Full Article Content"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 font-medium"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setEditModal(null)}
                  className="px-4 py-2 rounded-lg border bg-[#B71C1C] border-[#B71C1C] hover:bg-[#A01919]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
