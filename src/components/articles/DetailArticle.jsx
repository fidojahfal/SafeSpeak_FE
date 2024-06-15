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
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <h5 className="mb-2 mb-md-0 me-2">
          {title} - <span>{formattedDate}</span>
        </h5>
        <div className="d-flex flex-column flex-md-row align-items-center gap-2">
          {isDosen && (
            <div className="d-flex gap-2">
              <div className="d-flex">
                <Button
                  marginClass="btn btn-secondary btn-sm d-flex align-items-center"
                  onClickHandler={handleEditClick}
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <MdEdit />
                  </IconContext.Provider>
                  <span className="ms-1">Update</span>
                </Button>
              </div>
              <div className="d-flex">
                <Button
                  marginClass="btn btn-danger btn-sm d-flex align-items-center"
                  target="#deleteModal"
                >
                  <IconContext.Provider value={{ size: "20px" }}>
                    <MdDeleteForever />
                  </IconContext.Provider>
                  <span className="ms-1">Delete</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row gy-3 gx-4">
        <div className="col-12">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              minHeight: "300px",
              maxHeight: "50vh",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              alt="article"
              className="img-fluid"
              style={{ maxWidth: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-12">
          <div id="content" className="deskripsi">
            {content.split("\n").map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
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
