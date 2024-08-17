"use client";

import { useState } from "react";
import { fetchArticlesAction } from "@/actions/fetchArticleAction";
import { Article } from "@/types";

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

      {article && <div>{article.title}</div>}
    </main>
  );
}
