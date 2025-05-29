import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "@/stores/useQuizStore";

const SECONDS_PER_QUESTION = 60;

export function useTimer() {
  const navigate = useNavigate();
  const { questions } = useQuizStore();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let stored = Number(localStorage.getItem("quiz-time-left"));
    if (!stored) return;

    const totalTime = questions.length * SECONDS_PER_QUESTION;

    if (!stored || stored > totalTime) stored = totalTime;
    setTimeLeft(stored);

    const interval = setInterval(() => {
      stored -= 1;
      setTimeLeft(stored);
      localStorage.setItem("quiz-time-left", stored.toString());

      if (stored <= 0) {
        clearInterval(interval);
        localStorage.removeItem("quiz-time-left");
        navigate("/result");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [questions.length]);

  return { timeLeft };
}
