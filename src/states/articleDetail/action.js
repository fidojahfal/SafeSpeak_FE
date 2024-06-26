import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getArticleById, updateArticle } from "../../utils/api";
import {
  setNotificationDanger,
  setNotificationSuccess,
} from "../notification/action";

const ActionType = {
  RECEIVE_ARTICLE_DETAIL: "RECEIVE_ARTICLE_DETAIL",
  UPDATE_ARTICLE_DETAIL: "UPDATE_ARTICLE_DETAIL",
};

function receiveArticleDetailActionCreator(articleDetail) {
  return {
    type: ActionType.RECEIVE_ARTICLE_DETAIL,
    payload: {
      articleDetail,
    },
  };
}

function updateArticleDetailActionCreator(articleDetail) {
  return {
    type: ActionType.UPDATE_ARTICLE_DETAIL,
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

function asyncUpdateArticleDetail({ title, content, image, id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await updateArticle({ title, content, image, id });
      let updatedArticleDetail = await getArticleById(id);
      const randomNumber = Math.random();
      updatedArticleDetail = {
        ...updatedArticleDetail,
        image: updatedArticleDetail.image + "?n=" + randomNumber,
      };
      dispatch(updateArticleDetailActionCreator(updatedArticleDetail));
      dispatch(setNotificationSuccess("Article successfully updated"));
      return true;
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, asyncReceiveArticleDetail, asyncUpdateArticleDetail };
