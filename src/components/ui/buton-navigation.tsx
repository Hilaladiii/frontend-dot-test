import { cn } from "@/lib/utils";

interface ButtonNavigationProps {
  handleNavigate: () => void;
  index: number;
  status: string;
}

const ButtonNavigation = ({
  index,
  handleNavigate,
  status,
}: ButtonNavigationProps) => {
  return (
    <button
      key={index}
      onClick={handleNavigate}
      className={cn(
        "relative flex size-10 items-center justify-center rounded-sm bg-gray-200 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-300",
        status === "current" && "bg-blue-600 text-white ring-2 ring-blue-300",
        status === "answered" && "bg-green-500 text-white hover:bg-green-600",
      )}
    >
      {index + 1}
    </button>
  );
};

export default ButtonNavigation;
