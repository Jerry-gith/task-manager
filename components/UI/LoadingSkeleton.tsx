import { FaTasks } from "react-icons/fa";

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
        <FaTasks className="text-2xl text-orange-500 animate-bounce"/>
    </div>
  );
};

export default LoadingSkeleton;
