import { Middleware } from "../types";

export const createMiddleware = (
  middlewareName: string,
  callback: Middleware
): Middleware => {
  return async (req, event, next) => {
    console.log("start middleware: ", middlewareName);
    const result = await callback(req, event, next);
    console.log("end   middleware: ", middlewareName);

    return result;
  };
};
