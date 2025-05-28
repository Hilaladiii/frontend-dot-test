import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IQuestion } from "@/types/quiz.type";
import { decodeBase64 } from "@/lib/utils";

interface AnswerState {
  userAnswer: string;
  isCorrect: boolean;
}

interface QuizState {
  questions: IQuestion[];
  answers: Record<number, AnswerState>;
  score: number;
  totalCorrect: number;
  totalWrong: number;
  totalUnanswered: number;

  setQuestions: (raw: IQuestion[]) => void;
  setAnswer: (index: number, answer: string) => void;
  getDecodedQuestion: (index: number) => IQuestion | null;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      questions: [],
      answers: {},
      score: 0,
      totalCorrect: 0,
      totalWrong: 0,
      totalUnanswered: 0,

      setQuestions: (raw) => {
        const totalTime = raw.length * 60;
        localStorage.setItem("quiz-time-left", totalTime.toString());
        set({
          questions: raw,
          answers: {},
          score: 0,
          totalCorrect: 0,
          totalWrong: 0,
          totalUnanswered: raw.length,
        });
      },

      setAnswer: (index, userAnswer) => {
        const { questions, answers } = get();
        const correctAnswer = decodeBase64(questions[index].correct_answer);
        const isCorrect = userAnswer === correctAnswer;

        const newAnswers = {
          ...answers,
          [index]: { userAnswer, isCorrect },
        };

        const totalAnswered = Object.keys(newAnswers).length;
        const totalCorrect = Object.values(newAnswers).filter(
          (a) => a.isCorrect
        ).length;
        const totalWrong = totalAnswered - totalCorrect;
        const totalUnanswered = questions.length - totalAnswered;

        set({
          answers: newAnswers,
          score: (totalCorrect / questions.length) * 100,
          totalCorrect,
          totalWrong,
          totalUnanswered,
        });
      },

      getDecodedQuestion: (index: number) => {
        const question = get().questions[index];
        if (!question) return null;
        return {
          ...question,
          type: decodeBase64(question.type),
          difficulty: decodeBase64(question.difficulty),
          category: decodeBase64(question.category),
          question: decodeBase64(question.question),
          correct_answer: decodeBase64(question.correct_answer),
          incorrect_answers: question.incorrect_answers.map(decodeBase64),
        };
      },
      resetQuiz: () =>
        set({
          questions: [],
          answers: {},
          score: 0,
          totalCorrect: 0,
          totalWrong: 0,
          totalUnanswered: 0,
        }),
    }),
    {
      name: "quiz-storage",
    }
  )
);
