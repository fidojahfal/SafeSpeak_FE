import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveArticleDetail } from "../states/articleDetail/action";
import DetailArticle from "../components/articles/DetailArticle";
import "../styles/article.css";
import { asyncDeleteArticle } from "../states/articles/action";
import GeneralCardDetail from "../components/shared/GeneralCardDetail";

function DetailArticlePage() {
  const navigate = useNavigate();
  const { id: articleId } = useParams();
  const { articleDetail, authUser, loadingBar } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (articleId) {
      dispatch(asyncReceiveArticleDetail(articleId));
    }
  }, [articleId, dispatch]);

  const handleEditClick = () => {
    navigate(`/articles/${articleId}/update`); // Path ke halaman UpdateReport dengan ID laporan
  };

  const onDeleteHandler = async () => {
    const success = await dispatch(asyncDeleteArticle(articleId));
    if (success) {
      navigate("/articles");
    }
  };

  if (!articleDetail || loadingBar.default === 1) {
    return null;
  }

  return (
    <GeneralCardDetail onDeleteHandler={onDeleteHandler}>
      <DetailArticle
        {...articleDetail}
        isDosen={authUser ? authUser.role === 1 : false}
        handleEditClick={handleEditClick}
        handleDeleteClick={onDeleteHandler}
      />
    </GeneralCardDetail>
  );
}

export default DetailArticlePage;
