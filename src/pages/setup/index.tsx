import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import QuizSetupNumberQuestion from "./components/QuizSetupNumberQuestion";
import QuizSetupQuestionType from "./components/QuizSetupQuestionType";
import QuizSetupCategory from "./components/QuizSetupCategory";
import QuizSetupDifficulty from "./components/QuizSetupDifficulty";
import QuizSetupSummary from "./components/QuizSetupSummary";
import HeaderQuizSetup from "./components/HeaderQuizSetup";
import UserInfo from "./components/UserInfo";

const Setup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <HeaderQuizSetup />
      <div className="w-full grid grid-cols-2 max-w-4xl gap-2">
        <QuizSetupNumberQuestion />
        <QuizSetupQuestionType />
        <QuizSetupCategory />
        <QuizSetupDifficulty />
        <div className="col-span-2">
          <QuizSetupSummary />
          <Link to="/quiz">
            <Button className="w-full py-6 group mt-5">
              Start{" "}
              <ArrowRight className="group-hover:translate-x-3 transition-all duration-150" />
            </Button>
          </Link>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Setup;
