import CardQuizSetupLayout from "@/components/layout/CardQuizSetupLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategoryQuery } from "@/hooks/useCategoryQuery";
import { useQuizSetupStore } from "@/stores/useQuizSetupStore";
import { BookOpen } from "lucide-react";

const QuizSetupCategory = () => {
  const { data: categories } = useCategoryQuery();
  const { category, setCategory } = useQuizSetupStore();
  return (
    <CardQuizSetupLayout title="Category" icon={BookOpen}>
      <Select
        onValueChange={(value) => {
          const selected = categories?.find(
            (cat) => cat.id === parseInt(value),
          );
          if (selected) setCategory(selected);
        }}
      >
        <SelectTrigger className="h-12 border-gray-200 text-base focus:border-blue-500">
          <SelectValue placeholder={category?.name || "Choose a category"} />
        </SelectTrigger>
        <SelectContent>
          {Array.isArray(categories) &&
            categories.map((cat) => {
              return (
                <SelectItem key={cat.id} value={cat.id.toString()}>
                  <div className="flex items-center gap-2 text-base">
                    {cat.name}
                  </div>
                </SelectItem>
              );
            })}
        </SelectContent>
      </Select>
    </CardQuizSetupLayout>
  );
};

export default QuizSetupCategory;
