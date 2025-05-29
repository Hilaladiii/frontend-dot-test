import ButtonNavigation from "@/components/ui/buton-navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Legend from "@/components/ui/legend";
import type { IQuestion } from "@/types/quiz.type";

const QuizNavigationSidebar = ({
  questions,
  onNavigate,
  getQuestionStatus,
}: {
  questions: IQuestion[];
  onNavigate: (index: number) => void;
  getQuestionStatus: (index: number) => "current" | "answered" | "unanswered";
}) => {
  return (
    <div className="order-1 lg:col-span-1">
      <Card className="sticky top-4 border-0 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-2 lg:grid-cols-4">
            {questions.map((_, index) => {
              const status = getQuestionStatus(index);
              return (
                <ButtonNavigation
                  key={index}
                  index={index}
                  handleNavigate={() => onNavigate(index)}
                  status={status}
                />
              );
            })}
          </div>

          <div className="mt-4 space-y-2 text-xs">
            <Legend content="Current" color="bg-blue-600" />
            <Legend content="Answered" color="bg-green-500" />
            <Legend content="Unanswered" color="bg-gray-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizNavigationSidebar;
