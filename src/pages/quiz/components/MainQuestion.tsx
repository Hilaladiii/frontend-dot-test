import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { IQuestion } from "@/types/quiz.type";
import { useQuizStore } from "@/stores/useQuizStore";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ButtonOption from "@/components/ui/button-option";

const MainQuestion = ({
  question,
  currentQuestion,
  handleNextQuestion,
}: {
  question: IQuestion;
  currentQuestion: number;
  handleNextQuestion: () => void;
}) => {
  const { answers, setAnswer, totalCorrect, totalWrong, questions } =
    useQuizStore();

  const allOptions = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  const totalAnswered = totalCorrect + totalWrong;

  return (
    <div className="order-2 lg:col-span-4">
      <Card className="border-0 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Question {currentQuestion + 1}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-gray-50 p-6">
            <p className="text-lg leading-relaxed text-gray-900">
              {question.question}
            </p>
          </div>
          <div className="space-y-3">
            {allOptions.map((option, index) => {
              const selectedAnswer = answers[currentQuestion]?.userAnswer;
              const isSelected = selectedAnswer === option;
              return (
                <ButtonOption
                  key={index}
                  option={option}
                  index={index}
                  handleNextQuestion={() => {
                    setAnswer(currentQuestion, option);
                    handleNextQuestion();
                  }}
                  isSelected={isSelected}
                />
              );
            })}
            {totalAnswered === questions.length && (
              <Link to="/result">
                <Button className="mt-5 w-full p-6">Submit</Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainQuestion;
