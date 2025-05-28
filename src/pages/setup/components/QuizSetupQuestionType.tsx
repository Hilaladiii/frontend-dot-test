import CardQuizSetupLayout from "@/components/layout/CardQuizSetupLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { HelpCircle, Target } from "lucide-react";

const QuizSetupQuestionType = () => {
  const { setType, type } = useQuizSetupStore();

  const questionTypes = [
    { value: "multiple", label: "Multiple Choice", icon: HelpCircle },
    { value: "boolean", label: "True / False", icon: Target },
  ];

  return (
    <CardQuizSetupLayout title="Question type" icon={HelpCircle}>
      <div className="space-y-2">
        {questionTypes.map((qType) => {
          const IconComponent = qType.icon;
          return (
            <Button
              onClick={() => setType(qType.value as "multiple" | "boolean")}
              variant="outline"
              key={qType.value}
              className={cn(
                "w-full py-6 transition-all duration-200",
                type === qType.value && "border-primary bg-primary/5"
              )}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{qType.label}</span>
            </Button>
          );
        })}
      </div>
    </CardQuizSetupLayout>
  );
};

export default QuizSetupQuestionType;
