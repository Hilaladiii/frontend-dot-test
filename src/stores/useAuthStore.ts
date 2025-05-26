import supabase from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { create } from "zustand";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  fetchUser: async () => {
    set({ loading: true });
    const { data, error } = await supabase.auth.getUser();
    error || !data
      ? set({ user: null, isAuthenticated: false, loading: false })
      : set({ user: data.user, isAuthenticated: true, loading: false });
  },
}));
