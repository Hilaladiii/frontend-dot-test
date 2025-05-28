import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Home, LogOut } from "lucide-react";
import HeaderResult from "./components/HeaderResult";
import MainScoreCard from "./components/MainScoreCard";
import QuestionResultCard from "./components/QuestionResultCard";
import { getPerformanceMessage } from "@/lib/utils";
import { useQuizStore } from "@/stores/useQuizStore";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "@/hooks/useSignOut";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { useTransition } from "react";
import Loading from "../loading/page";

const Result = () => {
  const navigate = useNavigate();
  const [isLoading, startTransition] = useTransition();
  const { mutate: signOut, isPending } = useSignOut();
  const { resetSetup } = useQuizSetupStore();
  const {
    questions,
    answers,
    getDecodedQuestion,
    score,
    totalCorrect,
    totalUnanswered,
    totalWrong,
    resetQuiz,
  } = useQuizStore();

  const totalQuestion = questions.length;

  const performance = getPerformanceMessage(
    (totalCorrect / totalQuestion) * 100,
  );

  const handleRetakeQuiz = () => {
    startTransition(() => {
      resetQuiz();
      navigate("/quiz");
    });
  };

  const handleNewQuiz = () => {
    startTransition(() => {
      resetSetup();
      resetQuiz();
      navigate("/setup");
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="relative z-10 mx-auto max-w-4xl">
      <HeaderResult
        color={performance.color}
        icon={performance.icon}
        message={performance.message}
      />

      <MainScoreCard
        score={score}
        totalCorrect={totalCorrect}
        totalUnanswered={totalUnanswered}
        totalWrong={totalWrong}
      />

      <Card className="mb-6 border-0 bg-white shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Question Breakdown
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {questions.map((_, index) => {
              const decodedQuestion = getDecodedQuestion(index);
              const answer = answers[index];

              if (!decodedQuestion) return null;

              return (
                <QuestionResultCard
                  key={index}
                  id={index}
                  question={decodedQuestion.question}
                  correctAnswer={decodedQuestion.correct_answer}
                  userAnswer={answer?.userAnswer ?? "Unanswered"}
                  isCorrect={answer?.isCorrect ?? false}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button onClick={handleRetakeQuiz}>
          <RotateCcw className="mr-2 h-5 w-5" />
          Retake Quiz
        </Button>
        <Button variant="outline" onClick={handleNewQuiz}>
          <Home className="mr-2 h-5 w-5" />
          New Quiz
        </Button>
        <Button
          isLoading={isPending}
          className="bg-red-500 text-white hover:bg-red-700"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Result;
