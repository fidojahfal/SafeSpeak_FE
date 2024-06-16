import { ActionType } from "./action";

export default function articlesReducer(articles = null, action = {}) {
  switch (action.type) {
    case ActionType.CREATE_ARTICLE:
      return {
        originalArticles: [
          action.payload.article,
          ...articles.originalArticles,
        ],
        filteredArticles: [
          action.payload.article,
          ...articles.originalArticles,
        ],
      };
    case ActionType.DELETE_ARTICLE:
      return {
        originalArticles: articles.originalArticles.filter(
          (article) => article._id !== action.payload.article_id
        ),
        filteredArticles: articles.originalArticles.filter(
          (article) => article._id !== action.payload.article_id
        ),
      };
    case ActionType.RECEIVE_ARTICLES:
      return {
        originalArticles: action.payload.articles,
        filteredArticles: action.payload.articles,
      };
    case ActionType.FILTER_ARTICLES:
      return { ...articles, filteredArticles: action.payload.articles };
    default:
      return articles;
  }
}
