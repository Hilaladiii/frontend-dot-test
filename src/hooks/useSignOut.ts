import { signOut } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => signOut(),
    onSuccess: (response) => {
      if (response.error) {
        toast.error(response.error.message);
        return;
      }
      navigate("/auth/sign-in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
