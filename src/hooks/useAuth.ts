import { type User } from "@supabase/supabase-js";
import Cookies from "universal-cookie";

export const useAuth = () => {
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user") as User;
  const isAuthenticated = !!user;

  return { user, isAuthenticated };
};
