"use client";

import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { useUserAuth } from "@/context/UserAuthContext";

const Header = () => {
  const { userIsAuthenticated, signOut } = useUserAuth();

  return (
    <header className="flex justify-between items-center">
      <Link
        href={"/"}
        className="font-mono font-bold text-xl flex items-center gap-3"
      >
        <span className="text-orange-500 inline">
          <FaTasks />
        </span>
        Task Manager
      </Link>

      <div className="space-x-3">
        <Link className="hover:text-orange-500" href={"about"}>
          About
        </Link>

        {userIsAuthenticated && (
          <span
            className="hover:text-orange-500 cursor-pointer"
            onClick={signOut}
          >
            Sign Out
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
