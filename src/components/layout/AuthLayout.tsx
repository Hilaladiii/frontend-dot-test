import { Brain } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/auth/sign-up";
  return (
    <div className="min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 transform hover:rotate-12 transition-transform duration-300">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          QuizMaster
        </h1>
        <p className="text-base text-gray-600">
          {isSignUp ? "Create your account" : "Welcome back"}
        </p>
      </div>
      <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
        <Link
          to="/auth/sign-in"
          className={`py-2 px-10 rounded-lg font-medium transition-all duration-200 ${
            !isSignUp
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/auth/sign-up"
          className={`py-2 px-10 rounded-lg font-medium transition-all duration-200 ${
            isSignUp
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Sign Up
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
