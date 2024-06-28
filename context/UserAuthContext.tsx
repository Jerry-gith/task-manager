"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { IUser, IUserAuthContext } from "@/types";
import { LoadingSkeleton } from "@/components";

export const UserAuthContext = createContext<IUserAuthContext | undefined>(
  undefined
);

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const userIsAuthenticated = !!user;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const cookies = parseCookies();
    const authToken = cookies["auth-token"];

    if (storedUser && authToken) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const signUp = async (name: string, email: string, password: string) => {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/auth/sign-in");
    } else {
      const responseMsg = await response.json();
      throw new Error(responseMsg.message);
    }
  };

  const signIn = async (loginId: string, password: string) => {
    const response = await fetch("/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loginId, password }),
    });

    if (response.ok) {

      const { message, token, user } = await response.json(); 
      const userData = { message, token, ...user };

      setUser(userData);
      setCookie(null, "auth-token", userData.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/home");
    } else {
      const responseMsg = await response.json();
      throw new Error(responseMsg.message);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    document.cookie = "auth-token=; Max-Age=0; path=/";
    router.push("/");
  };

  return (
    <UserAuthContext.Provider
      value={{ user, userIsAuthenticated, signUp, signIn, signOut }}
    >
      {loading ? (
        <LoadingSkeleton />
      ) : (
        children
      )}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = (): IUserAuthContext => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};