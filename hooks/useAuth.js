"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.replace("/admin"); // redirect to login if not logged in
    } else {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, [router]);

  return { isAuthenticated, loading };
}
