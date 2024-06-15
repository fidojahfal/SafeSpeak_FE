import Button from "../form/Button";
import ArticleMiniCard from "./ArticleMiniCard";
import PropTypes from "prop-types";

function ArticleSection({ role, articles, onDetail, navigate }) {
  return (
    <section className="mb-5">
      <div className="row" style={{ "--bs-gutter-x": "0" }}>
        <div className="col-lg-6">
          <img
            src={role ? "/img/Beranda-Dosen-2.png" : "/img/Beranda-Siswa-2.png"}
            alt="Illustration of a girl looking at laptop"
            className="img-fluid home-article-image"
          />
        </div>
        <div className="col-lg-6 p-5">
          <h1 className="text-primary fw-bold text-lg-end text-center">
            {role
              ? "Edukasi siswa mengenai kekerasan seksual, bullying, dan prosedur penanganannya."
              : "Dapatkan informasi seputar kekerasan seksual, bullying, dan proses penanganannya disini."}
          </h1>
          <p className="fs-5 text-lg-end text-center mt-3 ">
            {role
              ? "Kontribusi dalam membuat artikel sebagai informasi edukasi untuk siswa."
              : "Jelajahi artikel seputar edukasi, proses penanganan, dan berita terbaru."}
          </p>
          <div className="d-flex justify-content-lg-end justify-content-center">
            <Button
              marginClass="fw-semibold"
              onClickHandler={() => navigate("/articles")}
            >
              Jelajahi Artikel
            </Button>
          </div>
        </div>
      </div>
      <p className="text-secondary text-center">Beberapa artikel terkini</p>
      <div
        className="d-flex justify-content-center align-items-center flex-sm-column flex-md-row flex-wrap"
        style={{ gap: "3rem" }}
      >
        {articles.length !== 0 ? (
          articles
            .slice(0, 3)
            .map((article) => (
              <ArticleMiniCard
                key={article._id}
                {...article}
                onDetail={onDetail}
                height="12rem"
              />
            ))
        ) : (
          <p>Belum ada artikel</p>
        )}
      </div>
    </section>
  );
}

ArticleSection.propTypes = {
  role: PropTypes.number.isRequired,
  articles: PropTypes.array.isRequired,
  onDetail: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ArticleSection;
