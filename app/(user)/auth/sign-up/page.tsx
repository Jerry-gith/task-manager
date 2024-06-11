"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { FaTasks } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const router = useRouter();

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="p-10">
      <form
        onSubmit={() => {}}
        className="mt-6 mx-auto space-y-6 shadow-md border px-10 py-8 rounded-xl border-t-2 border-gray-200"
      >
        <div className="text-center pb-6 space-y-4">
          <Link href={"/"}>
            <FaTasks className="mx-auto text-4xl text-orange-500" />
          </Link>

          <p className="font-medium">Register here!</p>
        </div>

        {error && (
          <p className="text-red-700 text-center text-sm font-bold">{error}</p>
        )}

        <div className="relative">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-md text-gray-500"
          >
            Full Name
          </label>
          <FaUser className="absolute bottom-4 left-3 text-orange-500" />
          <input
            name="name"
            value={userDetail.name}
            onChange={() => {}}
            className="pl-10 py-3 rounded-lg focus:rounded-none w-full shadow-md outline-none focus:border-b-2 focus:border-orange-500"
            type="text"
            placeholder="Full Name"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-md text-gray-500"
          >
            Email
          </label>
          <MdEmail className="absolute bottom-4 left-3 text-orange-500" />
          <input
            name="email"
            value={userDetail.email}
            onChange={() => {}}
            className="pl-10 py-3 rounded-lg focus:rounded-none w-full shadow-md outline-none focus:border-b-2 focus:border-orange-500"
            type="email"
            placeholder="Email Address"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-md text-gray-500"
          >
            Password
          </label>
          <RiLockPasswordFill className="absolute bottom-4 left-3 text-orange-500" />

          <input
            name="password"
            value={userDetail.password}
            onChange={() => {}}
            className="pl-10 py-3 rounded-lg focus:rounded-none w-full shadow-md outline-none focus:border-b-2 focus:border-orange-500"
            type={viewPassword ? `text` : `password`}
            placeholder="Password"
          />

          {viewPassword ? (
            <div
              className="absolute right-3 bottom-3"
              onClick={() => setViewPassword(!viewPassword)}
            >
              <FaRegEye className="text-orange-500" />
            </div>
          ) : (
            <div
              className="absolute right-3 bottom-3"
              onClick={() => setViewPassword(!viewPassword)}
            >
              <FaRegEyeSlash className="text-orange-500" />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-center text-white block my-8 py-3 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 rounded-xl"
        >
          Create Account
        </button>

        <p className="text-center mb-4">
          Have an account?{" "}
          <Link href="/auth/sign-in" className="font-medium hover:text-orange-500">
            Sign In
          </Link>
        </p>

        <span className="flex justify-center items-center gap-3 pt-2">
          <hr className="w-2/5 border-gray-300" />
          <small className="text-gray-300 font-bold">( OR )</small>
          <hr className="w-2/5 border-gray-300" />
        </span>

        <div className="flex flex-col mt-4 text-center gap-y-6">
          <Link
            href={"/api/auth/signin"}
            className="border rounded-md p-3 hover:bg-orange-500 hover:text-white"
          >
            Continue with Google
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
