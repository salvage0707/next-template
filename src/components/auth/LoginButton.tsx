"use client";

import { login } from "@/actions/login";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
  const router = useRouter();
  const onClick = async () => {
    const result = await login();
    if (result) {
      router.push("/protect");
    }
  };

  return <button onClick={onClick}>Login</button>;
};
