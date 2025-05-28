import { cn, formatTime } from "@/lib/utils";
import { Clock } from "lucide-react";

const Timer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
      <Clock
        className={cn("w-5 h-5 text-blue-600", timeLeft < 60 && "text-red-500")}
      />
      <span
        className={cn(
          "font-medium text-gray-900",
          timeLeft < 60 && "text-red-500"
        )}
      >
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default Timer;
