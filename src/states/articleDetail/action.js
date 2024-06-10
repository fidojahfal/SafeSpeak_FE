import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getArticleById, updateArticle, updateReport } from '../../utils/api';
import { setNotificationActionCreator } from '../notification/action';

const ActionType = {
  RECEIVE_ARTICLE_DETAIL: 'RECEIVE_ARTICLE_DETAIL',
  UPDATE_ARTICLE_DETAIL: 'UPDATE_ARTICLE_DETAIL',
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
      const updatedArticleDetail = await getArticleById(id);
      dispatch(updateArticleDetailActionCreator(updatedArticleDetail));
      return true;
    } catch (error) {
      dispatch(setNotificationActionCreator(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, asyncReceiveArticleDetail, asyncUpdateArticleDetail };
