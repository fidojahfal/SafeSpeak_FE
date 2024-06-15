import Button from "../form/Button";
import PropTypes from "prop-types";

function ArticleMiniCard({ _id, title, content, onDetail, image, height }) {
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
        <h6 className="title">{title}</h6>
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

ArticleMiniCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDetail: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ArticleMiniCard;
