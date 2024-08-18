"use server";

import { fetchArticle } from "@/lib/fetcher/fetchArticle";

export const fetchArticlesAction = async (id: number) => {
  return fetchArticle(id);
};
