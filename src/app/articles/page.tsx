import { fetchArticles } from "@/lib/fetcher/fetchArticles";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Page() {
  const articles = await fetchArticles();

  return (
    <main>
      <div>テスト</div>
      <Suspense fallback={<div>Loading...</div>}>
        {articles.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </Suspense>
    </main>
  );
}
