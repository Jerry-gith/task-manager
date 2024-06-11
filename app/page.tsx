import Link from "next/link";

import { FaTasks } from "react-icons/fa";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main className="max-h-screen p-10 mx-auto overflow-hidden">
      <header className="flex justify-between items-center">
        <Link 
          href={"/"}
        className="font-mono font-bold text-xl flex items-center gap-3">
          <span className="text-orange-500 inline">
            <FaTasks />
          </span>
          Task Manager
        </Link>

        <Link className="hover:text-orange-500 font-medium" href={"about"}>
          About
        </Link>
      </header>

      <section className="flex flex-col justify-center items-center h-screen -mt-20 gap-4">
        <h1 className="font-bold text-2xl text-orange-500">
          Stay Focused, Track Your Tasks!
        </h1>

        <small className="line-through font-bold">
          Getting distracted? Not any more!!!
        </small>

        <p className="text-justify">
          Boost productivity, manage time, and achieve your goals with our
          powerful task manager. Embrace the power of time boxing, set
          priorities, and never miss a deadline again. Whether you're a student,
          professional, or entrepreneur, our tool helps you stay organized and
          focused on what matters most.
        </p>

        <div className="flex gap-4 mt-8 font-medium">
          <Link
            className="bg-orange-500 py-3 px-6 rounded-full text-white shadow-md hover:bg-orange-400"
            href={"/auth/sign-up"}
          >
            Sign Up
          </Link>
          <Link
            className="border border-orange-500 py-3 px-6 rounded-full text-orange-500 shadow-md hover:bg-orange-500 hover:text-white"
            href={"/auth/sign-in"}
          >
            Sign In
          </Link>
        </div>
      </section>

      <footer className="text-center -mt-12">
        <p>
          &copy; {year} <span className="text-orange-500">Task Manager</span> |
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
