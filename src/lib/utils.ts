import { clsx, type ClassValue } from "clsx";
import { Award, Star, Target, TrendingUp, Trophy } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function emailToUsername(email: string): string {
  if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }
  return email.split("@")[0];
}

export function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

export function decodeBase64(str: string) {
  return atob(str);
}

export function getPerformanceMessage(percentage: number) {
  if (percentage >= 90)
    return {
      message: "Outstanding! You're a quiz master!",
      icon: Trophy,
      color: "text-yellow-600",
    };
  if (percentage >= 80)
    return {
      message: "Excellent work! Great knowledge!",
      icon: Award,
      color: "text-blue-600",
    };
  if (percentage >= 70)
    return {
      message: "Good job! Keep it up!",
      icon: Star,
      color: "text-green-600",
    };
  if (percentage >= 60)
    return {
      message: "Not bad! Room for improvement.",
      icon: Target,
      color: "text-orange-600",
    };
  return {
    message: "Keep practicing! You'll get better!",
    icon: TrendingUp,
    color: "text-purple-600",
  };
}
