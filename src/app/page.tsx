import styles from "./page.module.css";

export default async function Page() {
  const response = await fetch("/api/test");

  return (
    <main className={styles.main}>
      <div>テスト</div>
    </main>
  );
}
