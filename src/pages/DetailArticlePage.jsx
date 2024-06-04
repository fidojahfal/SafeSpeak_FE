import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveArticleDetail } from "../states/reportDetail/action";
import DetailArticle from "../components/reports/DetailArticle";
import Modal from "../components/form/Modal";
import "../styles/article.css";
import Alert from "../components/form/Alert";

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

  const isDosen = authUser.role === 1;

  if (!articleDetail) {
    return null;
  }

  return (
    <section className="bg-yellow-100 p-4">
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <Link onClick={() => navigate(-1)}>
            <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
          </Link>
        </div>
        <div className="col-lg-11">
          <Alert />
          <div className="col-lg card p-3">
            <div className="card-body">
              <DetailArticle
                {...articleDetail}
                authUser={authUser.id}
                isDosen={isDosen}
                handleEditClick={handleEditClick}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal id="deleteModal" />
    </section>
  );
}

export default DetailArticlePage;
