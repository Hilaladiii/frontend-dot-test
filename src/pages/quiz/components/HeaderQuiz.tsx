import Timer from "@/components/ui/timer";
import QuizProgress from "./QuizProgress";
import { useTimer } from "@/hooks/useTimer";

interface HeaderQuizProps {
  categoryName?: string;
  indexQuestion: number;
  answeredQuestion: number;
  totalQuestion: number;
}

const HeaderQuiz = ({
  categoryName,
  indexQuestion,
  answeredQuestion,
  totalQuestion,
}: HeaderQuizProps) => {
  const { timeLeft } = useTimer();
  return (
    <div className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {categoryName || "Random"}
        </h1>
        <Timer timeLeft={timeLeft} />
      </div>
      <QuizProgress
        indexQuestion={indexQuestion}
        answeredQuestion={answeredQuestion}
        totalQuestion={totalQuestion}
      />
    </div>
  );
};

export default HeaderQuiz;
