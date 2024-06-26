import React from 'react';

function Modal({
  id = 'deleteModal',
  title,
  body,
  confirm,
  cancel,
  onConfirm,
  variant,
  confirmButtonType = 'button',
}) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {cancel}
            </button>
            <button
              type={confirmButtonType}
              className={`btn ${variant}`}
              data-bs-dismiss="modal"
              onClick={onConfirm}
            >
              {confirm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
