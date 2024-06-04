import React from "react";
import PropTypes from "prop-types";
import Button from "../form/Button";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

function DetailArticle({
  title,
  content,
  image,
  created_at,
  isDosen,
  handleEditClick,
}) {
  const formattedDate = formatDate(created_at);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>
          {title} - <span>{formattedDate}</span>
        </h5>
        <div className="d-flex align-items-center gap-3">
          {isDosen && (
            <>
              <Button
                marginClass="btn btn-secondary d-flex align-items-center"
                onClickHandler={handleEditClick}
              >
                <IconContext.Provider value={{ size: "25px" }}>
                  <div>
                    <MdEdit />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Update</p>
              </Button>
              <Button
                marginClass="btn btn-danger d-flex align-items-center"
                target="#deleteModal"
              >
                <IconContext.Provider value={{ size: "25px" }}>
                  <div>
                    <MdDeleteForever />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Delete</p>
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="row gy-3 gx-4">
        <div className="col-12 fw-bold text-primary">
          <img src={`/uploads/${image}`} alt="article" className="img-fluid" />
        </div>
        <div className="col-12">
          <label htmlFor="content" className="fw-bold text-primary">
            Content
          </label>
          <textarea
            id="content"
            className="form-control deskripsi"
            value={content}
            disabled
          />
        </div>
      </div>
    </>
  );
}

DetailArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  isDosen: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default DetailArticle;
