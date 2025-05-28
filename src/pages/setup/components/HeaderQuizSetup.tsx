import { Brain } from "lucide-react";

const HeaderQuizSetup = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 transform hover:rotate-12 transition-transform duration-300">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">
        Configure Your Quiz
      </h1>
      <p className="text-lg text-gray-600">
        Customize your quiz experience to match your preferences
      </p>
    </div>
  );
};

export default HeaderQuizSetup;
