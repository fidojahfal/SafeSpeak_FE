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
  const { articleDetail, authUser } = useSelector((states) => ({
    articleDetail: states.articleDetail,
    authUser: states.authUser,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (articleId) {
      console.log(`Fetching article details for ID: ${articleId}`);
      dispatch(asyncReceiveArticleDetail(articleId));
    }
  }, [articleId, dispatch]);

  const handleEditClick = () => {
    navigate(`/articles/${articleId}/update`); // Path ke halaman UpdateReport dengan ID laporan
    console.log(`Navigating to update page for article ID: ${articleId}`);
  };

  const onDeleteHandler = async () => {
    const success = await dispatch(asyncDeleteArticle(articleId));
    if (success) {
      navigate("/articles");
    }
  };

  if (!articleDetail) {
    return null;
  }

  return (
    <GeneralCardDetail onDeleteHandler={onDeleteHandler}>
      <DetailArticle
        {...articleDetail}
        isDosen={authUser ? authUser.role === 1 : false}
        handleEditClick={handleEditClick}
      />
    </GeneralCardDetail>
  );
}

export default DetailArticlePage;
