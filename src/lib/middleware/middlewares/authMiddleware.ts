import { NextResponse } from "next/server";
import { createMiddleware } from "../helper/createMiddleware";

export const authMiddleware = createMiddleware(
  "authMiddleware",
  async (req, _event, next) => {
    const sessionId = req.cookies.get("sessionId");
    const NO_AUTH_PATHS = ["/"];
    if (!sessionId && !NO_AUTH_PATHS.includes(req.nextUrl.pathname)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    return next();
  }
);

