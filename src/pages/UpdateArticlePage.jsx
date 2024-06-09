import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from "../components/form/Alert";
import ArticleInput from "../components/articles/ArticleInput";
import {
  asyncReceiveArticleDetail,
  asyncUpdateArticleDetail,
} from "../states/articleDetail/action";
import { useEffect } from "react";

function UpdateArticlePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: articleId } = useParams();
  const { articleDetail } = useSelector((states) => states);

  useEffect(() => {
    if (articleId) {
      console.log(`Fetching report details for ID: ${articleId}`);
      dispatch(asyncReceiveArticleDetail(articleId));
    }
  }, [articleId, dispatch]);

  const onUpdateArticleHandler = async ({ title, content, image }) => {
    const success = await dispatch(
      asyncUpdateArticleDetail({ id: articleId, title, content, image })
    );
    if (success) {
      navigate(`/articles/${articleId}/detail`);
    }
  };

  if (!articleDetail) {
    return null;
  }

  return (
    <section className="bg-blue-100 p-4">
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
              <ArticleInput
                {...articleDetail}
                isEdit={true}
                submitHandler={onUpdateArticleHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateArticlePage;
