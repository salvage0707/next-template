import { fetchArticles } from "@/lib/fetcher/fetchArticles";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const articles = await fetchArticles();
  return NextResponse.json(articles);
}
