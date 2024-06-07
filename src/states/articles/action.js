import { showLoading, hideLoading } from "react-redux-loading-bar";
import { deleteArticle, insertArticle } from "../../utils/api";
import { setNotificationActionCreator } from "../notification/action";

const ActionType = {
  CREATE_ARTICLE: "CREATE_ARTICLE",
  DELETE_ARTICLE: "DELETE_ARTICLE",
};

function createArticleActionCreator(article) {
  return {
    type: ActionType.CREATE_ARTICLE,
    payload: {
      article,
    },
  };
}

function deleteArticleActionCreator(article_id) {
  return {
    type: ActionType.DELETE_ARTICLE,
    payload: {
      article_id,
    },
  };
}

function asyncCreateArticle({ title, content, image }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const article = await insertArticle({
        title,
        content,
        image,
      });
      dispatch(createArticleActionCreator(article));
      return true;
    } catch (error) {
      dispatch(setNotificationActionCreator(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDeleteArticle(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await deleteArticle(id);
      dispatch(deleteArticleActionCreator(id));
      return true;
    } catch (error) {
      dispatch(setNotificationActionCreator(id));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  createArticleActionCreator,
  asyncCreateArticle,
  asyncDeleteArticle,
};
