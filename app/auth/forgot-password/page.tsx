"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Link from "next/link";

import { FaTasks } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa6";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await resetPassword(email);
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

          <p className="font-medium">Reset Password</p>
          <small>A reset link will be sent to your email!</small>
        </div>

        {error && (
          <p className="text-red-700 text-center text-sm font-bold">{error}</p>
        )}

        <div className="relative">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-md text-gray-500"
          >
            Email Address
          </label>
          <FaUserLock className="absolute bottom-4 left-3 text-orange-500" />
          <input
            name="email"
            value={email}
            onChange={handleChange}
            className="pl-10 py-3 rounded-lg focus:rounded-none w-full shadow-md outline-none focus:border-b-2 focus:border-orange-500"
            type="text"
            placeholder="Email"
          />
        </div>
          <small className="italic text-orange-500">
            Kindly enter the email address associated with your account!
          </small>

        <button
          type="submit"
          className="w-full bg-orange-500 text-center text-white block my-8 py-3 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-400 rounded-xl"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
