import { NextResponse } from "next/server";
import { NextFetchEvent, NextRequest } from "next/server";

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

// 一連の処理を実行するミドルウェア例
export function middleware(req: NextRequest, _event: NextFetchEvent) {
  const requestUUID = crypto.randomUUID();

  /**
   * アクセスログ（リクエスト）
   */
  console.log(
    `[${requestUUID}][${new Date().toISOString()}] [Request ]     ${
      req.method
    } ${req.url}`
  );

  /**
   * Botからのアクセスブロック
   */
  const userAgent = req.headers.get("user-agent");
  if (userAgent && userAgent.includes("bot")) {
    const response = new NextResponse("Access denied", { status: 403 });
    /**
     * アクセスログ（レスポンス）
     */
    console.log(
      `[${requestUUID}][${new Date().toISOString()}] [Response] ${
        response.status
      } ${req.method} ${req.url}`
    );
    return response;
  }

  /**
   * 認証
   */
  const sessionId = req.cookies.get("sessionId");
  const NO_AUTH_PATHS = ["/"];
  if (!sessionId && !NO_AUTH_PATHS.includes(req.nextUrl.pathname)) {
    const response = new NextResponse("Unauthorized", { status: 401 });
    /**
     * アクセスログ（レスポンス）
     */
    console.log(
      `[${requestUUID}][${new Date().toISOString()}] [Response] ${
        response.status
      } ${req.method} ${req.url}`
    );
    return response;
  }

  /**
   * レスポンスに独自ヘッダーを追加
   */
  const response = NextResponse.next();
  response.headers.set("x-custom-res-header", "some-value");

  return response;
}
