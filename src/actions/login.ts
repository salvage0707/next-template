"use server";

import { cookies } from "next/headers";

export const login = async () => {
  cookies().set("sessionId", "123456");
  return true;
};
