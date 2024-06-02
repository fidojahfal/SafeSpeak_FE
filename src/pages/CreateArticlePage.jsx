// Article Styling
import { Link, useNavigate } from "react-router-dom";
import "../styles/article.css";
import Alert from "../components/form/Alert";
import ArticleInput from "../components/articles/ArticleInput";

function CreateArticlePage() {
  const navigate = useNavigate();
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
              <ArticleInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateArticlePage;
