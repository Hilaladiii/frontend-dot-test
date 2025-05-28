import CardQuizSetupLayout from "@/components/layout/CardQuizSetupLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { Trophy } from "lucide-react";

const QuizSetupDifficulty = () => {
  const { setDifficulty, difficulty } = useQuizSetupStore();
  const difficulties = [
    {
      value: "easy",
      label: "Easy",
      color: "bg-green-500",
      description: "Perfect for beginners",
    },
    {
      value: "medium",
      label: "Medium",
      color: "bg-yellow-500",
      description: "A good challenge",
    },
    {
      value: "hard",
      label: "Hard",
      color: "bg-red-500",
      description: "For quiz masters",
    },
  ];

  return (
    <CardQuizSetupLayout title="Difficulty" icon={Trophy}>
      <div className="space-y-3">
        {difficulties.map((diff) => (
          <Button
            variant="outline"
            key={diff.value}
            className={cn(
              "flex w-full items-center justify-between rounded-lg border-2 py-7 transition-all duration-200",
              difficulty === diff.value && "border-primary bg-primary/5",
            )}
            onClick={() =>
              setDifficulty(diff.value as "easy" | "medium" | "hard")
            }
          >
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${diff.color}`}></div>
              <div className="text-left">
                <div className="font-medium text-gray-900">{diff.label}</div>
                <div className="text-sm text-gray-500">{diff.description}</div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </CardQuizSetupLayout>
  );
};

export default QuizSetupDifficulty;
