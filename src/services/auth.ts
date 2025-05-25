import supabase from "@/lib/supabase";
import type {
  AuthResponse,
  AuthTokenResponsePassword,
} from "@supabase/supabase-js";

export const signIn = async (
  email: string,
  password: string
): Promise<AuthTokenResponsePassword> => {
  try {
    const res = await supabase.auth.signInWithPassword({ email, password });
    return res;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await supabase.auth.signUp({
      email,
      password,
    });
    return res;
  } catch (error) {
    throw error;
  }
};
