"use client";

import { useState } from "react";
import { ITask } from "@/types/iTaskList";
import { IoIosAddCircle } from "react-icons/io";

export interface DisplayTaskProps {
  addTasks: (task: ITask) => void;
}

const CreateArea: React.FC<DisplayTaskProps> = ({ addTasks }) => {
  const [click, setClick] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((task) => (task = e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!task) return setError("Your cannot add an unnamed or empty task!");

    const shortMonthOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    const date = new Date().toLocaleDateString("en-US", shortMonthOptions);
 
    console.log(task, date)

    

  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <p className="-mt-12 bg-red-500 text-white rounded-xl py-2 px-3 font-bold text-center text-xs">
          {error}
        </p>
      )}

      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        placeholder={click ? `Enter your task...` : `Add a task`}
        className="px-2 pt-3 text-xl text-black outline-none placeholder:text-sm"
        onClick={() => setClick(true)}
      />

      {/* <input
        type="date"
        name="date"
        value={task}
        onChange={handleChange}
        placeholder="nnn"
        className="outline-none placeholder:hidden"
        onClick={() => setClick(true)}
      /> */}

      <button
        type="submit"
        className="absolute bg-orange-400 hover:bg-orange-500 p-3 rounded-full font-bold text-white -bottom-5 right-5"
      >
        <IoIosAddCircle />
      </button>
    </form>
  );
};

export default CreateArea;
