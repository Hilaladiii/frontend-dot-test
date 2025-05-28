import type { IQuizCategory } from "@/types/quiz.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface QuizSetupState {
  numOfQuestions: number[];
  type: "multiple" | "boolean" | undefined;
  category: IQuizCategory | undefined;
  difficulty: "easy" | "medium" | "hard" | undefined;
  setNumOfQuestions: (num: number[]) => void;
  setType: (type: "multiple" | "boolean") => void;
  setCategory: (category: IQuizCategory) => void;
  setDifficulty: (level: "easy" | "medium" | "hard") => void;
  resetSetup: () => void;
}

export const useQuizSetupStore = create<QuizSetupState>()(
  persist(
    (set) => ({
      numOfQuestions: [5],
      type: undefined,
      category: undefined,
      difficulty: undefined,
      setNumOfQuestions: (numOfQuestions) => set({ numOfQuestions }),
      setType: (type) => set({ type }),
      setCategory: (category) => set({ category }),
      setDifficulty: (difficulty) => set({ difficulty }),
      resetSetup: () =>
        set({
          numOfQuestions: [5],
          type: undefined,
          category: undefined,
          difficulty: undefined,
        }),
    }),

    {
      name: "quiz-setup",
    }
  )
);
