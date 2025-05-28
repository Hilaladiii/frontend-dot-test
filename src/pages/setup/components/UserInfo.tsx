import { emailToUsername } from "@/lib/utils";
import { useAuthStore } from "@/stores/useAuthStore";
import { User } from "lucide-react";

const UserInfo = () => {
  const { user } = useAuthStore();
  return (
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white rounded-full px-4 py-2 shadow-sm">
        <User className="w-4 h-4" />
        <span>
          Welcome back, {emailToUsername(user!.email!)} to Quiz Master!
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
