"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const onClick = async () => {
    const result = await logout();
    if (result) {
      router.push("/");
    }
  };

  return <button onClick={onClick}>Logout</button>;
};
