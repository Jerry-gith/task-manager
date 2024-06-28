// "use client";

// import { useEffect, useState, useRef } from "react";
// import { MdOutlineAddTask } from "react-icons/md";
// import CreateArea from "./CreateArea";
// import { ITask } from "@/types/iTaskList";

// const AddTaskButton = () => {
//   const [task, setTask] = useState<string>("");
//   const [addTaskBtn, setAddTaskBtn] = useState<boolean>(false);
//   const navBarRef = useRef<HTMLSElement>(null);

//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       const navBarElement = navBarRef.current;
//       if (navBarElement && !navBarElement.contains(event.target as Node)) {
//         setAddTaskBtn(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <>
//       <span
//         ref={navBarRef}
//         onClick={() => setAddTaskBtn(!addTaskBtn)}
//         className="-mt-10 bg-orange-400 hover:bg-orange-500 text-white rounded-full shadow-md p-5 mx-3"
//       >
//         <MdOutlineAddTask />
//       </span>

//       {addTaskBtn && (
//         <CreateArea
//           addTasks={function (task: ITask): void {
//             throw new Error("Function not implemented.");
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default AddTaskButton;

"use client";

import { useEffect, useState, useRef } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import CreateArea from "./CreateArea";
import { ITask } from "@/types/iTaskList";

const AddTaskButton = () => {
  const [task, setTask] = useState<string>("");
  const [addTaskBtn, setAddTaskBtn] = useState<boolean>(false);
  const navBarRef = useRef<HTMLSpanElement>(null);
  const createAreaRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const navBarElement = navBarRef.current;
      const createAreaElement = createAreaRef.current;

      if (
        navBarElement &&
        !navBarElement.contains(event.target as Node) &&
        createAreaElement &&
        !createAreaElement.contains(event.target as Node)
      ) {
        setAddTaskBtn(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <span
        ref={navBarRef}
        onClick={() => setAddTaskBtn(!addTaskBtn)}
        className="-mt-10 bg-orange-400 hover:bg-orange-500 text-white rounded-full shadow-md p-5 mx-3"
      >
        <MdOutlineAddTask />
      </span>

      {addTaskBtn && (
        <span
          className="absolute bottom-24 shadow-md border border-orange-200 mx-auto w-[82.5%] md:w-2/4 lg:w-1/4 bg-white p-7 rounded-xl"
          ref={createAreaRef}
        >
          <CreateArea
            addTasks={function (task: ITask): void {
              throw new Error("Function not implemented.");
            }}
          />
        </span>
      )}
    </>
  );
};

export default AddTaskButton;
