import { MdOutlineNotificationsActive } from "react-icons/md";

const Notifications = () => {
  return (
    <div className="relative">
      <main className="z-10 -mt-20 bg-white p-12 rounded-t-[3rem] -mx-10">
        <div className="flex flex-col items-center justify-center gap-2 pt-56">
          <MdOutlineNotificationsActive className="text-4xl text-orange-500 animate-pulse" />
          <p>Coming soon! </p>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
