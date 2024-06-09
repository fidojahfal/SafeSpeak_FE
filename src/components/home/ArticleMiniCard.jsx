import Button from "../form/Button";

function ArticleMiniCard({ _id, title, content, onDetail, image, height }) {
  console.log("in article mini card", _id);
  return (
    <div className="card home-article-card">
      <img
        style={{ minHeight: height, maxHeight: height, objectFit: "cover" }}
        src={image}
        className="card-img-top"
        alt="Image of a card"
        width="100%"
      />
      <div className="card-body p-3 d-flex flex-column">
        <p className="text-muted mb-2">Artikel</p>
        <h6>{title}</h6>
        <p className="content">{content}</p>
        <Button
          marginClass="fw-semibold align-self-end"
          onClickHandler={() => onDetail(_id)}
        >
          Detail
        </Button>
      </div>
    </div>
  );
}

export default ArticleMiniCard;
