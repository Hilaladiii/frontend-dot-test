import { signIn } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const useSignIn = () => {
  const navigate = useNavigate();
  const cookie = new Cookies(null, { path: "/" });
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onSuccess: (response) => {
      console.log(response.data);
      if (response.error) {
        toast.error(response.error.message);
        return;
      }
      cookie.set("user", response.data.user);

      toast.success("Success sign in to your account");
      navigate("/home");
    },
    onError: (error) => {
      console.log("error message", error);
      toast.error(error.message);
    },
  });
};
