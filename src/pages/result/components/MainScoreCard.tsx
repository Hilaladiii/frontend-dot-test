import { Card, CardContent } from "@/components/ui/card";
import Stats from "@/components/ui/stats";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

interface MainScoreCardProps {
  totalCorrect: number;
  totalWrong: number;
  totalUnanswered: number;
  score: number;
}

const MainScoreCard = ({
  totalCorrect,
  totalWrong,
  totalUnanswered,
  score,
}: MainScoreCardProps) => {
  return (
    <Card className="mb-8 border-0 bg-white shadow-sm">
      <CardContent className="p-8">
        <div className="mb-6 text-center">
          <div className="mb-2 text-4xl font-bold text-gray-800">
            Your Score
          </div>
          <div className="text-4xl font-semibold text-blue-600">
            {Math.floor(score)}%
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Stats
            background="bg-green-50"
            icon={CheckCircle2}
            count={totalCorrect}
            color="text-green-600"
            text="Correct"
          />
          <Stats
            background="bg-red-50"
            icon={XCircle}
            count={totalWrong}
            color="text-red-600"
            text="Wrong"
          />
          <Stats
            background="bg-gray-50"
            icon={AlertCircle}
            count={totalUnanswered}
            color="text-gray-600"
            text="Unanswered"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MainScoreCard;
