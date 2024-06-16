import { showLoading, hideLoading } from "react-redux-loading-bar";
import { deleteArticle, getAllArticles, insertArticle } from "../../utils/api";
import {
  setNotificationDanger,
  setNotificationSuccess,
} from "../notification/action";

const ActionType = {
  CREATE_ARTICLE: "CREATE_ARTICLE",
  DELETE_ARTICLE: "DELETE_ARTICLE",
  RECEIVE_ARTICLES: "RECEIVE_ARTICLES",
  FILTER_ARTICLES: "FILTER_ARTICLES",
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

function receiveArticlesActionCreator(articles) {
  return {
    type: ActionType.RECEIVE_ARTICLES,
    payload: {
      articles,
    },
  };
}

function filterArticlesActionCreator(articles) {
  return {
    type: ActionType.FILTER_ARTICLES,
    payload: {
      articles,
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
      dispatch(setNotificationSuccess("Artikel berhasil dibuat"));
      return true;
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
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
      dispatch(setNotificationSuccess("Artikel berhasil dihapus"));
      return true;
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncReceiveArticles() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const articles = await getAllArticles();
      dispatch(receiveArticlesActionCreator(articles));
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
    }
    dispatch(hideLoading());
  };
}

function asyncFilterArticles(keyword) {
  return async (dispatch, getStates) => {
    let {
      articles: { originalArticles },
    } = getStates();
    try {
      const filteredArticles = originalArticles.filter((article) =>
        article.title.toLowerCase().includes(keyword.toLowerCase())
      );
      dispatch(filterArticlesActionCreator(filteredArticles));
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
    }
  };
}

export {
  ActionType,
  createArticleActionCreator,
  asyncCreateArticle,
  asyncDeleteArticle,
  asyncReceiveArticles,
  asyncFilterArticles,
};
