import { ActionType } from "./action";

export default function reportArticleReducer(
  articleDetail = null,
  action = {}
) {
  switch (action.type) {
    case ActionType.RECEIVE_ARTICLE_DETAIL:
      return action.payload.articleDetail;
    default:
      return articleDetail;
  }
}
