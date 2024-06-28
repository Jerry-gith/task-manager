"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";

import AddTaskButton from "../Task/AddTaskButton";

const DashboardFooter = () => {
  const pathname = usePathname();

  return (
    <footer className="absolute bottom-0 left-0 right-0 w-full text-orange-300 p-4 border border-orange-100">
      <div className="flex justify-around items-center text-2xl">
        <Link
          href={"/home"}
          passHref
          className={`hover:text-orange-600 ${
            pathname === "/home" && "text-orange-700"
          }`}
        >
          <MdOutlineDashboard/>
        </Link>

        <Link
          href={"/tasks"}
          passHref
          className={`hover:text-orange-600 ${
            pathname === "/tasks" && "text-orange-700 font-black"
          }`}
        >
          <GoTasklist />
        </Link>

        <AddTaskButton />

        <Link
          href={"/notifications"}
          passHref
          className={`hover:text-orange-600 ${
            pathname === "/notifications" && "text-orange-700"
          }`}
        >
          <MdOutlineNotificationsActive />
        </Link>

        <Link
          href={"/dashboard"}
          passHref
          className={`hover:text-orange-600 ${
            pathname === "/dashboard" && "text-orange-700"
          }`}
        >
          <CgProfile />
        </Link>
      </div>
    </footer>
  );
};

export default DashboardFooter;