import { NextResponse } from "next/server";
import { createMiddleware } from "../helper/createMiddleware";

export const blockBotMiddleware = createMiddleware(
  "blockBotMiddleware",
  async (req, _event, next) => {
    const userAgent = req.headers.get("user-agent");
    if (userAgent && userAgent.includes("bot")) {
      return new NextResponse("Access denied", { status: 403 });
    }

    return next();
  }
);
