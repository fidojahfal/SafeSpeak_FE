import { ActionType } from "./action";

export default function articlesReducer(articles = [], action = {}) {
  switch (action.type) {
    case ActionType.CREATE_ARTICLE:
      return [action.payload.article, ...articles];
    case ActionType.DELETE_ARTICLE:
      return articles.filter(
        (article) => article._id !== action.payload.article_id
      );
    case ActionType.RECEIVE_ARTICLES:
      return action.payload.articles;
    default:
      return articles;
  }
}
