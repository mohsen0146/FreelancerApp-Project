import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    querykey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rewCategories = [] } = data || {};
  const categories = rewCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformedCategories = rewCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
