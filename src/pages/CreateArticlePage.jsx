// Article Styling
import { Link, useNavigate } from "react-router-dom";
import "../styles/article.css";
import Alert from "../components/form/Alert";
import ArticleInput from "../components/articles/ArticleInput";
import { useDispatch } from "react-redux";
import { asyncCreateArticle } from "../states/articles/action";

function CreateArticlePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateArticle = async ({ title, content, image }) => {
    console.log({
      title,
      content,
      image,
    });
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
              <ArticleInput submitHandler={onCreateArticle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateArticlePage;
