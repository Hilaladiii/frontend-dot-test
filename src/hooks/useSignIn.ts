import { signIn } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onSuccess: (response) => {
      if (response.error) {
        toast.error(response.error.message);
        return;
      }
      toast.success("Success sign in to your account");
      navigate("/setup");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
