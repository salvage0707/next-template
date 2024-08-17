import { NextResponse } from "next/server";
import { NextFetchEvent, NextRequest } from "next/server";
import { middlewareChain } from "./lib/middleware";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  console.log("Hello middleware.ts");

  const next = async () => {
    return NextResponse.next();
  };
  return middlewareChain(req, event, next);
}

export const config = {
  matcher: [
    /*
     * 次のもので始まるリクエストパスを除くすべてのリクエストパスにマッチさせます:
     * - api (APIルート)
     * - _next/static (静的ファイル)
     * - _next/image (画像最適化ファイル)
     * - favicon.ico (ファビコンファイル)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
