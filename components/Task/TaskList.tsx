import { ITaskList } from "@/types";
import { FaRegCalendarAlt } from "react-icons/fa";


const TaskList = ({
  taskTitle,
  taskDate,
  taskStatus,
  taskStatusIcon,
}: ITaskList) => {
  return (
    <section
      id="taskList"
      className="mt-5 bg-white rounded-md border border-orange-100 shadow-md p-4"
    >
      <div id="task" className="">
        <h3 id="title" className="font-bold">
          {taskTitle}
        </h3>

        <div id="details" className="flex gap-x-6 items-baseline my-3">
          <span id="date" className="flex gap-2 items-center mt-1">
            <FaRegCalendarAlt className="text-orange-500" />
            <p id="date">{taskDate}</p>
          </span>

          <span id="date" className="flex gap-2 items-center">
            <span>{taskStatusIcon}</span>
            <p id="status">{taskStatus}</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TaskList;

{
  /* <GoTasklist className="text-orange-500 text-xl" /> */
}
