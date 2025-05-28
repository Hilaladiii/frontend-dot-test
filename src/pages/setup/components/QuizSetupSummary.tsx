import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import CardQuizSetupLayout from "../../../components/layout/CardQuizSetupLayout";
import { Badge } from "../../../components/ui/badge";
import { Settings } from "lucide-react";

const QuizSetupSummary = () => {
  const { numOfQuestions, type, category, difficulty } = useQuizSetupStore();
  const formattedQuestionType =
    type === "multiple"
      ? "Multiple choice"
      : type === "boolean"
      ? "True/False"
      : null;
  const formattedLevel =
    difficulty && difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  return (
    <CardQuizSetupLayout title="Quiz Summary" icon={Settings}>
      <div className="flex gap-3">
        {numOfQuestions && (
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {numOfQuestions[0]} Questions
          </Badge>
        )}
        {formattedQuestionType && (
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            {formattedQuestionType}
          </Badge>
        )}
        {category?.name && (
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {category.name || "Not Selected"}
          </Badge>
        )}
        {formattedLevel && (
          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
            {formattedLevel}
          </Badge>
        )}
      </div>
    </CardQuizSetupLayout>
  );
};

export default QuizSetupSummary;
