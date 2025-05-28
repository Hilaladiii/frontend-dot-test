import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionResultCardProps {
  id: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const QuestionResultCard = ({
  id,
  question,
  userAnswer,
  correctAnswer,
  isCorrect,
}: QuestionResultCardProps) => {
  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-start gap-3">
        {isCorrect ? (
          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
        )}
        <div className="flex-1">
          <div className="font-medium text-gray-900 mb-1">
            Question {id + 1}: {question}
          </div>
          <div className="text-sm space-y-1">
            <div>
              <span className="text-gray-600">Your answer: </span>
              <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                {userAnswer}
              </span>
            </div>
            {!isCorrect && (
              <div>
                <span className="text-gray-600">Correct answer: </span>
                <span className="text-green-600">{correctAnswer}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResultCard;
