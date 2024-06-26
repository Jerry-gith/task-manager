"use client";

import { ReactNode } from "react";
import { UserAuthProvider } from "@/context/UserAuthContext";


export function Providers({ children }: {children: ReactNode}) {
  return <UserAuthProvider>{children}</UserAuthProvider>;
}