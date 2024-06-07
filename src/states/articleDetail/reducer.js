import { ActionType } from "./action";

export default function detailArticleReducer(
  articleDetail = null,
  action = {}
) {
  switch (action.type) {
    case ActionType.RECEIVE_ARTICLE_DETAIL:
      return action.payload.articleDetail;
    case ActionType.UPDATE_ARTICLE_DETAIL:
      return action.payload.articleDetail;
    default:
      return articleDetail;
  }
}
