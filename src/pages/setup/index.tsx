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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <HeaderQuizSetup />
      <div className="grid w-full max-w-4xl grid-cols-1 gap-2 md:grid-cols-2">
        <QuizSetupNumberQuestion />
        <QuizSetupQuestionType />
        <QuizSetupCategory />
        <QuizSetupDifficulty />
        <div className="md:col-span-2">
          <QuizSetupSummary />
          <Link to="/quiz">
            <Button className="group mt-5 w-full py-6">
              Start{" "}
              <ArrowRight className="transition-all duration-150 group-hover:translate-x-3" />
            </Button>
          </Link>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Setup;
