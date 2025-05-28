import { getCategories } from "@/services/quiz";
import { useQuery } from "@tanstack/react-query";

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    staleTime: Infinity,
  });
};
