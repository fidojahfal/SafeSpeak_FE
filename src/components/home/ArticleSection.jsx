import Button from "../form/Button";
import ArticleMiniCard from "./ArticleMiniCard";

function ArticleSection() {
  return (
    <section>
      <div className="row" style={{ "--bs-gutter-x": "0" }}>
        <div className="col-lg-6">
          <img
            src="/img/Beranda-Siswa-2.png"
            alt="Illustration of a girl looking at laptop"
            className="img-fluid home-article-image"
          />
        </div>
        <div className="col-lg-6 p-5">
          <h1 className="text-primary fw-bold text-lg-end text-center">
            Dapatkan informasi seputar kekerasan seksual, bullying, dan proses
            penanganannya disini.
          </h1>
          <p className="fs-5 text-lg-end text-center mt-3 ">
            Jelajahi artikel seputar edukasi, proses penanganan, dan berita
            terbaru.
          </p>
          <div className="d-flex justify-content-lg-end justify-content-center">
            <Button marginClass="fw-semibold">Jelajahi Artikel</Button>
          </div>
        </div>
      </div>
      <p className="text-secondary text-center">Beberapa artikel terkini</p>
      <div
        className="d-flex justify-content-center align-items-center flex-sm-column flex-md-row flex-wrap"
        style={{ gap: "3rem" }}
      >
        <ArticleMiniCard />
        <ArticleMiniCard />
        <ArticleMiniCard />
      </div>
    </section>
  );
}

export default ArticleSection;
