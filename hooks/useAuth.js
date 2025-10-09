"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("user");
    if (!session) {
      router.push("/admin");
    } else {
      setUser(JSON.parse(session));
    }
    setLoading(false);
  }, [router]);

  return { user, loading };
}
