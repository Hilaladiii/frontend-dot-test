import supabase from "@/lib/supabase";
import type {
  AuthError,
  AuthResponse,
  AuthTokenResponsePassword,
} from "@supabase/supabase-js";

export const signIn = async (
  email: string,
  password: string
): Promise<AuthTokenResponsePassword> => {
  try {
    return await supabase.auth.signInWithPassword({ email, password });
  } catch (error) {
    throw error;
  }
};

export const signUp = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    return await supabase.auth.signUp({
      email,
      password,
    });
  } catch (error) {
    throw error;
  }
};

export const signOut = async (): Promise<{ error: AuthError | null }> => {
  try {
    return await supabase.auth.signOut();
  } catch (error) {
    throw error;
  }
};
