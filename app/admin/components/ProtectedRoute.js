"use client";

import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Checking authentication...
      </div>
    );
  }

  if (!isAuthenticated) return null; // Redirect handled in useAuth

  return <>{children}</>;
}
