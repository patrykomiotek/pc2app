"use server";

import { cookies } from "next/headers";

export const login = async (data: FormData) => {
  const login = data.get("login");
  const password = data.get("password");

  // if -> check login
  if (1 === 1) {
    // ;)
    cookies().set("user", "pom");
    return { success: true };
  }
  return { success: false };
};

export const logout = async () => {
  cookies().delete("user");
};

export const getUser = async () => {
  const user = cookies().get("user");
  return user ? user.value : null;
};
