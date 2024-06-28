"use client";

import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowRightAlt } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";

import { useUserAuth } from "@/context/UserAuthContext";

const Header = () => {
  const { user, userIsAuthenticated, signOut } = useUserAuth();
  const [openNavBar, setOpenNavBar] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>("");
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    const handleOutsideClick = (event: MouseEvent) => {
      const navBarElement = navBarRef.current;
      if (navBarElement && !navBarElement.contains(event.target as Node)) {
        setOpenNavBar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-orange-400 text-white -m-10 pt-5 px-10 pb-32">
      <div className="flex justify-between items-center">
        <div id="userDetails" className="flex gap-4 items-center">
          <Image
            src={"/img/avatar.png"}
            alt="Avatar"
            width={40}
            height={0}
            className="rounded-full border border-white"
          />

          <div id="smallDetails" className="text-sm">
            <h2 className="text-md font-bold">
              Hello, {user?.name || "User"}.
            </h2>
            <p> {greeting}!</p>
          </div>
        </div>

        <div id="navBar" ref={navBarRef}> 
          {openNavBar ? (
            <div className="flex flex-col bg-white divide-y-2 divide-orange-50 text-orange-500 h-screen absolute z-10 top-0 right-0 w-3/5 shadow-md">
              <IoMdClose
                onClick={() => setOpenNavBar(false)}
                className="text-md font-bold absolute bg-orange-500 text-white z-10 rounded-full right-4 top-4"
              />

              <Link
                href={"/"}
                className="pl-8 mt-12 py-4 hover:shadow-md hover:border-t-2 hover:border-orange-100"
              >
                Go Home <MdArrowRightAlt className="inline-block" />
              </Link>

              <Link
                href={"/dashboard"}
                className="pl-8 py-4 hover:shadow-md hover:border-t-2 hover:border-orange-100"
              >
                Dashboard
              </Link>

              <Link
                href={"/dashboard"}
                className="pl-8 py-4 hover:shadow-md hover:border-t-2 hover:border-orange-100"
              >
                Edit Profile
              </Link>

              {userIsAuthenticated && (
                <span
                  className="hover:text-red-500 cursor-pointer pl-8 py-4 hover:shadow-md hover:border-t-2 hover:border-orange-100"
                  onClick={signOut}
                >
                  Sign Out
                </span>
              )}
            </div>
          ) : (
            <GiHamburgerMenu
              onClick={() => setOpenNavBar(true)}
              className="text-xl relative"
            />
          )}
        </div>
      </div>

      <div id="searchBar" className="mt-8 relative">
        
        <input type="text" name="searchQuery" id="searchQuery" placeholder="Search for a task" className="w-full p-2 bg-transparent rounded-xl border-2 border-white border-opacity-50 focus:outline-none pl-12 placeholder:text-white placeholder:opacity-75 placeholder:text-sm" />
        <MdManageSearch className="absolute top-3 left-3 text-xl font-extrabold" />
      </div>
    </header>
  );
};

export default Header;
