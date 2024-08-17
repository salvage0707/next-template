import { Article } from "@/types";
import { http, RequestHandler, HttpResponse } from "msw";

const articlesHandler = http.get<{ message: string }>(
  `${process.env.NEXT_PUBLIC_API_SERVER_URL}/articles`,
  ({}) => {
    const articles: Article[] = [
      {
        id: 100,
        title: "Mock Article 100",
        content: "Mock Content 100",
      },
      {
        id: 200,
        title: "Mock Article 200",
        content: "Mock Content 200",
      },
      {
        id: 300,
        title: "Mock Article 300",
        content: "Mock Content 300",
      },
    ];

    return HttpResponse.json(articles);
  }
);

export const handlers: RequestHandler[] = [articlesHandler];
