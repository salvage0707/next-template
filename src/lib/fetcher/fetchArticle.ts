import { Article } from "@/types";

export const fetchArticle = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/articles/${id}`
  );
  return (await response.json()) as Article;
};
