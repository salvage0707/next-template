import { fetchArticles } from "@/lib/fetcher/fetchArticles";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Page() {
  const articles = await fetchArticles();

  return (
    <main className={styles.main}>
      <div>Home</div>
      <Link href="/articles">articles</Link>

      <Link href="/articles/detail">article detail</Link>

      <Link href="/articles-api">articles api</Link>
    </main>
  );
}
