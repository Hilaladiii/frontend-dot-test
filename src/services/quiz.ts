import axiosInstance from "@/lib/axios";
import type { IQuestion, IQuizCategory } from "@/types/quiz.type";

export const getCategories = async (): Promise<IQuizCategory[]> => {
  try {
    const res = await axiosInstance.get("api_category.php");
    return res.data.trivia_categories;
  } catch (error) {
    throw error;
  }
};

export const getQuestions = async ({
  numOfQuestions,
  categoryId,
  type,
  difficulty,
}: {
  numOfQuestions?: number;
  categoryId?: number;
  type?: string;
  difficulty?: string;
}): Promise<IQuestion[]> => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.append("amount", numOfQuestions?.toString() || "5");
    if (categoryId) searchParams.append("category", categoryId.toString());
    if (type) searchParams.append("type", type);
    if (difficulty) searchParams.append("difficulty", difficulty);
    searchParams.append("encode", "base64");

    const res = await axiosInstance.get(`api.php?${searchParams}`);
    return res.data.results;
  } catch (error) {
    throw error;
  }
};
