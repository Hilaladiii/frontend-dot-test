import { useState, useEffect } from "react";
import HeaderQuiz from "./components/HeaderQuiz";
import QuizNavigationSidebar from "./components/QuizNavigationSidebar";
import MainQuestion from "./components/MainQuestion";
import { useQuestionQuery } from "@/hooks/useQuestionQuery";
import { useQuizStore } from "@/stores/useQuizStore";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import Loading from "../loading/page";

const Quiz = () => {
  const { data, isLoading } = useQuestionQuery();
  const { category, numOfQuestions } = useQuizSetupStore();
  const {
    questions,
    setQuestions,
    getDecodedQuestion,
    totalCorrect,
    totalWrong,
    answers,
  } = useQuizStore();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const decodedQuestion = getDecodedQuestion(currentQuestion);

  useEffect(() => {
    if (!isLoading && data && questions.length === 0) {
      setQuestions(data!);
    }
  }, [data, questions.length, isLoading]);

  const handleQuestionNavigation = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const getQuestionStatus = (index: number) => {
    if (index === currentQuestion) return "current";
    if (answers[index] !== undefined) return "answered";
    return "unanswered";
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <HeaderQuiz
          categoryName={category?.name}
          answeredQuestion={totalCorrect + totalWrong}
          indexQuestion={currentQuestion}
          totalQuestion={numOfQuestions[0]}
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <QuizNavigationSidebar
            questions={questions}
            getQuestionStatus={getQuestionStatus}
            onNavigate={handleQuestionNavigation}
          />
          {decodedQuestion && (
            <MainQuestion
              question={decodedQuestion}
              currentQuestion={currentQuestion}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
