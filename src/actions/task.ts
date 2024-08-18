"use server";

import { Task } from "@/types/task";
import { revalidateTag } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const TAG = "tasks";

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${API_URL}/tasks`, {
    // cache: "no-store",
    next: {
      tags: [TAG],
    },
  });
  return res.json();
}

export async function addTask(title: string) {
  await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, isCompleted: false }),
  });
  revalidateTag(TAG);
}

export async function deleteTask(id: string) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  revalidateTag(TAG);
}

export async function toggleTask(id: string, isCompleted: boolean) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isCompleted: !isCompleted }),
  });
  revalidateTag(TAG);
}
