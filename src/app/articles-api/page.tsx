"use client";
import { Article } from "@/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const func = async () => {
      const response = await fetch("/api/articles");
      const articlesData = await response.json();
      setArticles(articlesData);
    };
    func();
  }, []);

  return (
    <main>
      <div>Route Handlerテスト</div>
      {articles.map((article) => (
        <div>{article.title}</div>
      ))}
    </main>
  );
}
