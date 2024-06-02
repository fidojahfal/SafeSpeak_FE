import { ActionType } from "./action";

export default function articlesReducer(articles = [], action = {}) {
  switch (action.type) {
    case ActionType.CREATE_ARTICLE:
      return [action.payload.article, ...articles];
    default:
      return articles;
  }
}
