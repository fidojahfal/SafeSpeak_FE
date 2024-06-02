import { showLoading, hideLoading } from "react-redux-loading-bar";
import { insertArticle, insertReport } from "../../utils/api";
import { setNotificationActionCreator } from "../notification/action";

const ActionType = {
  CREATE_ARTICLE: "CREATE_ARTICLE",
};

function createArticleActionCreator(article) {
  return {
    type: ActionType.CREATE_ARTICLE,
    payload: {
      article,
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

export { ActionType, createArticleActionCreator, asyncCreateArticle };
