import Button from "../form/Button";

function ArticleMiniCard() {
  return (
    <div className="card home-article-card">
      <div className="card-body p-3 d-flex flex-column">
        <p className="text-muted mb-2">Artikel</p>
        <h6>Article title will be here</h6>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
          aliquaaaaaaaaaaaaaaaaaaaa
        </p>
        <Button marginClass="fw-semibold align-self-end">Detail</Button>
      </div>
    </div>
  );
}

export default ArticleMiniCard;
