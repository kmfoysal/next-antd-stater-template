"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, isClient } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user?.email && isClient) {
      router.push("/login");
    }
  }, [user?.email, router]);

  return user?.email && isClient ? children : null;
};

export default PrivateRoute;
