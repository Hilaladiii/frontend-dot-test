import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../ui/logo";

const AuthLayout = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/auth/sign-up";
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="mb-8 text-center">
        <Logo className="transition-all duration-200 hover:rotate-15" />
        <h1 className="mb-2 text-3xl font-semibold text-gray-900">
          QuizMaster
        </h1>
        <p className="text-base text-gray-600">
          {isSignUp ? "Create your account" : "Welcome back"}
        </p>
      </div>
      <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
        <Link
          to="/auth/sign-in"
          className={`rounded-lg px-10 py-2 font-medium transition-all duration-200 ${
            !isSignUp
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/auth/sign-up"
          className={`rounded-lg px-10 py-2 font-medium transition-all duration-200 ${
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
