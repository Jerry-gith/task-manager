import Link from "next/link";

import { MdArrowRightAlt } from "react-icons/md";
import { GoTasklist } from "react-icons/go";

import { DashboardHeader, TaskList, DashboardFooter } from "@/components";

const Home = () => {
  return (
    <div className="relative">
      <main className="z-10 -mt-20 bg-white p-12 rounded-t-[3rem] -mx-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-semibold text-xl text-orange-500">
            Recent Tasks
          </h2>
          <span className="flex items-center hover:text-orange-500">
            <Link href={"/tasks"}>View All</Link>
            <MdArrowRightAlt className="text-xl" />
          </span>
        </div>

        <TaskList
          taskTitle={"Complete HTML & CSS"}
          taskDate={"27 June 2024"}
          taskStatus={"Incomplete"}
          taskStatusIcon={<GoTasklist className="text-orange-500 text-xl" />}
        />

        <TaskList
          taskTitle={"Complete JavaScript"}
          taskDate={"30 June 2024"}
          taskStatus={"Not Started"}
          taskStatusIcon={<GoTasklist className="text-orange-500 text-xl" />}
        />

        <TaskList
          taskTitle={"Download YouTube Tutorials"}
          taskDate={"24 June 2024"}
          taskStatus={"Completed!"}
          taskStatusIcon={<GoTasklist className="text-orange-500 text-xl" />}
        />
      </main>
    </div>
  );
};

export default Home;
