import CardQuizSetupLayout from "@/components/layout/CardQuizSetupLayout";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { Hash } from "lucide-react";

const QuizSetupNumberQuestion = () => {
  const { setNumOfQuestions, numOfQuestions } = useQuizSetupStore();
  return (
    <CardQuizSetupLayout title="Number of Questions" icon={Hash}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-gray-700">
            Questions: {numOfQuestions[0]}
          </Label>
          <span className="text-sm text-gray-500">5-50 questions</span>
        </div>
        <Slider
          value={numOfQuestions}
          onValueChange={(value) => setNumOfQuestions(value)}
          max={50}
          min={5}
          step={5}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>5</span>
          <span>25</span>
          <span>50</span>
        </div>
      </div>
    </CardQuizSetupLayout>
  );
};

export default QuizSetupNumberQuestion;
