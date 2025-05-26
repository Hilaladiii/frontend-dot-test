import supabase from "@/lib/supabase";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [fetchUser]);

  return <>{children}</>;
};

export default AuthProvider;
