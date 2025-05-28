import { signOut } from "@/services/auth";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { useQuizStore } from "@/stores/useQuizStore";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { resetQuiz } = useQuizStore();
  const { resetSetup } = useQuizSetupStore();
  return useMutation({
    mutationFn: () => signOut(),
    onSuccess: (response) => {
      if (response.error) {
        toast.error(response.error.message);
        return;
      }
      resetSetup();
      resetQuiz();
      localStorage.removeItem("quiz-time-left");
      navigate("/auth/sign-in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
