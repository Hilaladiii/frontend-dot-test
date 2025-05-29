import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import QuizContinuePopup from "../shared/QuizContinuePopup";
import { useQuizStore } from "@/stores/useQuizStore";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";

const QuizSavedLayout = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { questions, totalCorrect, totalWrong, answers, totalUnanswered } =
    useQuizStore();
  const { category } = useQuizSetupStore();

  useEffect(() => {
    if (questions.length > 0 && Object.keys(answers).length >= 0) {
      setShow(true);
    }
  }, []);

  const handleQuizContinue = () => {
    setShow(false);
    navigate("/quiz");
  };

  return (
    <>
      <Outlet />
      <QuizContinuePopup
        answeredQuestion={totalCorrect + totalWrong}
        isOpen={show}
        onContinue={handleQuizContinue}
        title={category?.name || "Random"}
        totalQuestions={questions.length}
        totalUnanswered={totalUnanswered}
      />
    </>
  );
};

export default QuizSavedLayout;
