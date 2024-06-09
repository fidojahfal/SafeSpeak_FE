import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from "../components/form/Alert";
import ArticleInput from "../components/articles/ArticleInput";
import {
  asyncReceiveArticleDetail,
  asyncUpdateArticleDetail,
} from "../states/articleDetail/action";
import { useEffect } from "react";
import GeneralCard from "../components/shared/GeneralCard";

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
    <GeneralCard>
      <ArticleInput
        {...articleDetail}
        isEdit={true}
        submitHandler={onUpdateArticleHandler}
      />
    </GeneralCard>
  );
}

export default UpdateArticlePage;
