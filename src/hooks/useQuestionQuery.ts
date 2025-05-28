import { getQuestions } from "@/services/quiz";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { useQuery } from "@tanstack/react-query";

export const useQuestionQuery = () => {
  const { numOfQuestions, category, difficulty, type } = useQuizSetupStore();
  return useQuery({
    queryKey: ["questions", numOfQuestions[0], category?.id, difficulty, type],
    queryFn: () =>
      getQuestions({
        numOfQuestions: numOfQuestions[0],
        categoryId: category?.id,
        difficulty,
        type,
      }),
    staleTime: Infinity,
  });
};
