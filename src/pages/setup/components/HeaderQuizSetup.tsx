import Logo from "@/components/ui/logo";

const HeaderQuizSetup = () => {
  return (
    <div className="mb-8 text-center">
      <Logo className="transition-all duration-200 hover:rotate-15" />
      <h1 className="mb-2 text-3xl font-semibold text-gray-900">
        Configure Your Quiz
      </h1>
      <p className="text-lg text-gray-600">
        Customize your quiz experience to match your preferences
      </p>
    </div>
  );
};

export default HeaderQuizSetup;
