"use client";

import { Suspense, useState } from "react";
import { fetchArticlesAction } from "@/actions/fetchArticleAction";
import { Article } from "@/types";

export const dynamic = "force-dynamic";

export default function Page() {
  const [id, setId] = useState(1);
  const [article, setArticle] = useState<Article | null>(null);

  const onClick = async () => {
    const article = await fetchArticlesAction(id);
    setArticle(article);
  };

  return (
    <main>
      <div>詳細</div>

      <input
        defaultValue={id}
        onChange={(e) => setId(e.target.value ? Number(e.target.value) : 1)}
      />

      <button onClick={onClick}>fetch</button>

      <Suspense fallback={<div>Loading...</div>}>
        {article && <div>{article.title}</div>}
      </Suspense>
    </main>
  );
}
