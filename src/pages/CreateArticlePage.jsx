// Article Styling
import { Link, useNavigate } from "react-router-dom";
import "../styles/article.css";
import ArticleInput from "../components/articles/ArticleInput";
import { useDispatch } from "react-redux";
import { asyncCreateArticle } from "../states/articles/action";
import GeneralCard from "../components/shared/GeneralCard";

function CreateArticlePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateArticle = async ({ title, content, image }) => {
    const success = await dispatch(
      asyncCreateArticle({
        title,
        content,
        image,
      })
    );
    if (success) {
      navigate("/articles");
    }
  };

  return (
    <GeneralCard>
      <ArticleInput submitHandler={onCreateArticle} />
    </GeneralCard>
  );
}

export default CreateArticlePage;
