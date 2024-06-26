"use client";

import Link from "next/link";
import { useUserAuth } from "@/context/UserAuthContext";

const HomeSection = () => {
  const { userIsAuthenticated } = useUserAuth();

  return (
    <section className="flex flex-col justify-center items-center h-screen -mt-20 gap-4">
      <h1 className="font-bold text-2xl text-orange-500">
        Stay Focused, Track Your Tasks!
      </h1>

      <small className="line-through font-bold">
        Getting distracted? Not any more!!!
      </small>

      <p className="text-justify">
        Boost productivity, manage time, and achieve your goals with our
        powerful task manager. Embrace the power of time boxing, set priorities,
        and never miss a deadline again. Whether you're a student, professional,
        or entrepreneur, our tool helps you stay organized and focused on what
        matters most.
      </p>

      <div className="flex gap-4 mt-8 font-medium">
        {/* {loading &&         <Suspense fallback={<Loading />}></Suspense>} */}
        {userIsAuthenticated ? (
          <Link
            className="bg-orange-500 py-3 px-12 rounded-full text-white shadow-md hover:bg-orange-400"
            href={"/home"}
          >
            Explore
          </Link>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
