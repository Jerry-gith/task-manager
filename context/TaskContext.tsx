"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { LoadingSkeleton } from "@/components";
import { ITaskContext } from "@/types/iTaskList";

export const TaskContext = createContext<ITaskContext | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    setLoading(false);
  }, []);

  const addTask = async () => {
    const response = await fetch("/api/add-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ }),
    });

  };

  const editTask = async () => {
    const response = await fetch("/api/edit-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ }),
    });

  };

  const deleteTask = async () => {
    const response = await fetch("/api/delete-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ }),
    });

  };
  
  return (
    <TaskContext.Provider
      value={{ addTask, editTask, deleteTask }}
    >
      {loading ? (
        <LoadingSkeleton />
      ) : (
        children
      )}
    </TaskContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};