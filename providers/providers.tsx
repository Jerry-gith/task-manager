"use client";

import { ReactNode } from "react";
import { UserAuthProvider } from "@/context/UserAuthContext";
import { TaskProvider } from "@/context/TaskContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <UserAuthProvider>
      <TaskProvider>{children}</TaskProvider>
    </UserAuthProvider>
  );
}
