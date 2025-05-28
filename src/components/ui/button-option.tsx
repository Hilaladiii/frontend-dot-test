import { CheckCircle2, Circle } from "lucide-react";

interface ButtonOptionProps {
  handleNextQuestion: () => void;
  index: number;
  isSelected: boolean;
  option: string;
}

const ButtonOption = ({
  index,
  isSelected,
  option,
  handleNextQuestion,
}: ButtonOptionProps) => {
  return (
    <button
      onClick={handleNextQuestion}
      className={`flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left transition-all duration-200 ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      {isSelected ? (
        <CheckCircle2 className="h-5 w-5 text-blue-600" />
      ) : (
        <Circle className="h-5 w-5 text-gray-400" />
      )}
      <span className="font-medium text-gray-900">
        {String.fromCharCode(65 + index)}. {option}
      </span>
    </button>
  );
};

export default ButtonOption;
