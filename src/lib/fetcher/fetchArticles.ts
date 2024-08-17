import { Article } from "@/types";

export const fetchArticles = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/articles`,
    {
      cache: "no-cache",
    }
  );
  return (await response.json()) as Article[];
};
