import Link from "next/link";
import styles from "./page.module.css";
import { LoginButton } from "@/components/auth/LoginButton";
import { headers } from "next/headers";

export default async function Page() {
  console.log("x-custom-req-header desu", headers().get("x-custom-req-header"));

  return (
    <main className={styles.main}>
      <div>Home</div>
      <Link href="/protect">To protect page</Link>
      <LoginButton />
    </main>
  );
}
