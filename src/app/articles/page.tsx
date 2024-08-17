import { fetchArticles } from "@/lib/fetcher/fetchArticles";

export default async function Page() {
  const articles = await fetchArticles();

  return (
    <main>
      <div>テスト</div>
      {articles.map((article) => (
        <div>{article.title}</div>
      ))}
    </main>
  );
}
