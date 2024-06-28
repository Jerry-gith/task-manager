import { TaskList } from "@/components";
import { GiSandsOfTime } from "react-icons/gi";

const Tasks = () => {
  return (
    <div className="relative">
      <main className="z-10 -mt-20 bg-white p-12 rounded-t-[3rem] -mx-10">
        <div className="flex items-center justify-around mb-10 shadow-md border border-orange-100 divide-x-2 divide-orange-100 ">
          <span className="p-3 font-bold text-orange-400 text-center hover:bg-orange-400 hover:text-white w-full">
            To Dos
          </span>
          <span className="p-3 font-bold text-orange-400 text-center hover:bg-orange-400 hover:text-white w-full">
            In progress
          </span>
          <span className="p-3 font-bold text-orange-400 text-center hover:bg-orange-400 hover:text-white w-full">
            Completed
          </span>
        </div>

        <TaskList
          taskTitle={"Complete HTML & CSS"}
          taskDate={"27 June 2024"}
          taskStatus={"Time Elapsed!"}
          taskStatusIcon={<GiSandsOfTime className="text-orange-500 text-lg" />}
        />

        <TaskList
          taskTitle={"Complete JavaScript"}
          taskDate={"30 June 2024"}
          taskStatus={"< 36 hours left!"}
          taskStatusIcon={<GiSandsOfTime className="text-orange-500 text-lg" />}
        />

        <TaskList
          taskTitle={"Download YouTube Tutorials"}
          taskDate={"24 June 2024"}
          taskStatus={"Completed!"}
          taskStatusIcon={<GiSandsOfTime className="text-orange-500 text-lg" />}
        />
      </main>
    </div>
  );
};

export default Tasks;
