import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BookOpen, Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Timer from "@/components/ui/timer";
import { useTimer } from "@/hooks/useTimer";

interface QuizContinuePopupProps {
  isOpen: boolean;
  title: string;
  answeredQuestion: number;
  totalQuestions: number;
  totalUnanswered: number;
  onContinue: () => void;
}

const QuizContinuePopup = ({
  isOpen,
  title,
  answeredQuestion,
  totalQuestions,
  totalUnanswered,
  onContinue = () => {},
}: QuizContinuePopupProps) => {
  const { timeLeft } = useTimer();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <Card className="animate-in zoom-in-95 w-full max-w-md border-0 bg-white shadow-2xl duration-200">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Quiz in Progress
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Don't lose your progress!
                </p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
            <h3 className="mb-3 font-medium text-blue-900">{title} Quiz</h3>

            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">
                  Question {answeredQuestion} of {totalQuestions}
                </span>
              </div>
              <div className="w-fit">
                <Timer timeLeft={timeLeft} />
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {answeredQuestion} answered • {totalUnanswered} remaining
                </span>
              </div>
              <Progress
                value={(answeredQuestion / totalQuestions) * 100}
                className="h-2"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-gray-700">
              You have an active quiz session. Leaving now will pause your
              progress.
            </p>
            <p className="text-sm text-gray-500">
              Your answers have been automatically saved.
            </p>
          </div>

          <Button onClick={onContinue} className="w-full">
            <Play className="mr-2 h-4 w-4" />
            Continue Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizContinuePopup;
