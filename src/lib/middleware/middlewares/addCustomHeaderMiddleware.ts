import { createMiddleware } from "../helper/createMiddleware";

export const addCustomHeaderMiddleware = createMiddleware(
  "addCustomHeaderMiddleware",
  async (_req, _event, next) => {
    const response = await next();
    response.headers.set("x-custom-header", "some-value");
    return response;
  }
);
