"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Link from "next/link";

import { FaTasks } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useUserAuth } from "@/context/UserAuthContext";

const SignIn = () => {
  const { signIn } = useUserAuth();

  const [userDetail, setUserDetail] = useState({
    loginId: "",
    password: "",
  });

  const [viewPassword, setViewPassword] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signIn(userDetail.loginId, userDetail.password);
    } catch (error: string | any) {
      setError(`${error.message}`);
    }
  };

  return (
    <div className="mt-24 px-4 max-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="mt-6 mx-auto space-y-6 shadow-md border px-10 py-8 rounded-xl border-t-2 border-gray-200"
      >
        <div className="text-center pb-6 space-y-4">
          <Link href={"/"}>
            <FaTasks className="mx-auto text-4xl text-orange-500" />
          </Link>

          <p className="font-medium">Login here!</p>
        </div>

        {error && (
          <p className="text-red-700 text-center text-sm font-bold">{error}</p>
        )}

        <div className="relative">
          <label
            htmlFor="loginId"
            className="block mb-2 text-lg font-md text-gray-500"
          >
            Username or Email
          </label>
          <FaUserLock className="absolute bottom-4 left-3 text-orange-500" />
          <input
            name="loginId"
            value={userDetail.loginId}
            onChange={handleChange}
            className="pl-10 py-3 rounded-lg focus:rounded-none w-full shadow-md outline-none focus:border-b-2 focus:border-orange-500"
            type="text"
            placeholder="Username or Email"
            autoComplete="username"
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
            onChange={handleChange}
            className="pl-10 py-3 rounded-lg focus:rounded-none w-full shadow-md outline-none focus:border-b-2 focus:border-orange-500"
            type={viewPassword ? `text` : `password`}
            placeholder="Password"
            autoComplete="current-password"
          />

          {viewPassword ? (
            <div className="absolute flex items-center gap-1 right-3 text-sm bottom-3">
              <FaRegEye
                className="text-orange-500"
                onClick={() => setViewPassword(!viewPassword)}
              />
              <span className="font-medium">|</span>
              <Link
                href={"/auth/forgot-password"}
                className="text-orange-500 hover:text-orange-400"
              >
                Forgot?
              </Link>
            </div>
          ) : (
            <div className="absolute flex items-center gap-1 right-3 text-sm bottom-3">
              <FaRegEyeSlash
                className="text-orange-500"
                onClick={() => setViewPassword(!viewPassword)}
              />
              <span className="font-medium">|</span>
              <Link
                href={"/auth/forgot-password"}
                className="text-orange-500 hover:text-orange-400"
              >
                Forgot?
              </Link>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-center text-white block my-8 py-3 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-400 rounded-xl"
        >
          Login
        </button>

        <p className="text-center mb-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="font-medium hover:text-orange-500"
          >
            Sign Up
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
            className="border rounded-md p-3 hover:bg-orange-500  hover:text-white"
          >
            Continue with Google
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
