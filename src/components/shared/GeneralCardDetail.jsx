import { Link, useNavigate } from "react-router-dom";
import Alert from "../form/Alert";
import Modal from "../form/Modal";

function GeneralCardDetail({
  children,
  sectionClassname = "bg-yellow-100 p-4",
  onDeleteHandler,
}) {
  const navigate = useNavigate();
  return (
    <section className={sectionClassname}>
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <Link onClick={() => navigate(-1)}>
            <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
          </Link>
        </div>
        <div className="col-lg-11">
          <Alert />
          <div className="col-lg card p-3">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
      <Modal
        id="deleteArticleModal"
        body="Apakah anda yakin ingin menghapus artikel ini? Anda tidak dapat memulihkan artikel."
        title="Konfirmasi Hapus Artikel"
        cancel="Batal"
        confirm="Hapus"
        onConfirm={onDeleteHandler}
        variant="btn-danger"
      />
    </section>
  );
}

export default GeneralCardDetail;
