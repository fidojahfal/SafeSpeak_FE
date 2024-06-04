import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getArticleById } from "../../utils/api";

const ActionType = {
  RECEIVE_ARTICLE_DETAIL: "RECEIVE_ARTICLE_DETAIL",
};

function receiveArticleDetailActionCreator(articleDetail) {
  return {
    type: ActionType.RECEIVE_ARTICLE_DETAIL,
    payload: {
      articleDetail,
    },
  };
}

function asyncReceiveArticleDetail(articleId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const articleDetail = await getArticleById(articleId);
      dispatch(receiveArticleDetailActionCreator(articleDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveArticleDetail };
