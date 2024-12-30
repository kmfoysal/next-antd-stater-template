"use client";

import { authService } from "@/libs/authService";
import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || null
      : null,
};

const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(INITIAL_STATE.user);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const checkSession = async () => {
  //         try {
  //             const userData = await authService.validateSession();
  //             setUser(userData);
  //         } catch {
  //             setUser({});
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     checkSession();
  // }, []);

  const login = async (username, password) => {
    const userData = await authService.login(username, password);
    setUser(userData);
  };

  const logout = () => {
    authService.logout();
    setUser({});
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isClient,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
