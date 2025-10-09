"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Trash2, Edit2, X } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [users, setUsers] = useState([]);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Editor",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        toast.error("You are not logged in.");
        return;
      }

      try {
        const res = await fetch("/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch users");
        setUsers(data);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Add user
  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add user");
      setUsers([...users, data]);
      setForm({ name: "", email: "", role: "Editor", password: "" });
      toast.success("User added successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete user");
      setUsers(users.filter((u) => u._id !== id));
      toast.success("User deleted successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to delete user");
    }
  };

  // Open modal for editing
  const openModal = (user) => {
    setEditUser(user);
    setForm({
      name: user.name || "",
      email: user.email || "",
      role: user.role || "Editor",
      password: "",
    });
    setModalOpen(true);
  };

  // Update user
  const handleUpdateUser = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`/api/users/${editUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update user");
      setUsers(users.map((u) => (u._id === editUser._id ? data : u)));
      setModalOpen(false);
      toast.success("User updated successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to update user");
    }
  };

  return (
    <DashboardLayout>
      <ToastContainer position="top-right" />
      {authLoading ? (
        <p>Checking authentication...</p>
      ) : !user ? (
        <p>You must be logged in to view this page.</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

          {/* Add New User Form */}
          <form
            onSubmit={handleAddUser}
            className="grid sm:grid-cols-5 gap-4 mt-4 bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="Editor">Editor</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-[#B71C1C] text-white px-4 py-2 rounded-lg hover:bg-[#A01919] transition disabled:opacity-50"
            >
              <PlusCircle size={18} /> {loading ? "Adding..." : "Add User"}
            </button>
          </form>

          {/* Users Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-t border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {user.name || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {user.role || "Editor"}
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() => openModal(user)}
                        className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                      >
                        <Edit2 size={16} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Edit Modal */}
          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-40 z-50">
              <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Password (leave blank to keep)"
                  />
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="Editor">Editor</option>
                    <option value="Admin">Admin</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>
                  <button
                    onClick={handleUpdateUser}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </DashboardLayout>
  );
}
