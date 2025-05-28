import { Progress } from "@/components/ui/progress";

const QuizProgress = ({
  indexQuestion,
  totalQuestion,
  answeredQuestion,
}: {
  indexQuestion: number;
  totalQuestion: number;
  answeredQuestion: number;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Question {indexQuestion + 1} of {totalQuestion}
        </span>
        <span className="text-sm text-gray-600">
          {answeredQuestion} answered • {totalQuestion} remaining
        </span>
      </div>
      <Progress
        value={(answeredQuestion / totalQuestion) * 100}
        className="h-2"
      />
    </div>
  );
};

export default QuizProgress;
