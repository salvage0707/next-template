import { fetchArticles } from "@/lib/fetcher/fetchArticles";
import { NextResponse } from "next/server";

export async function GET() {
  const articles = await fetchArticles();
  return NextResponse.json(articles);
}
