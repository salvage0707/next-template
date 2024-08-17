"use client";
import { Article } from "@/types";
import { Suspense, useEffect, useState } from "react";

export const dynamic = "force-dynamic";

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
      <Suspense fallback={<div>Loading...</div>}>
        {articles.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </Suspense>
    </main>
  );
}
