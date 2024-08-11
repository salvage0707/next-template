import { http, RequestHandler, HttpResponse } from "msw";

const testHandler = http.get<{ message: string }>("/test", ({}) => {
  return HttpResponse.json({
    message: "hello world",
  });
});

export const handlers: RequestHandler[] = [testHandler];
