import Modal from "../form/Modal";
import Button from "../form/Button";
import { useState } from "react";

function StatusDropdown({ id, status, onChangeStatus, onShowReasonInput }) {
  const [selectedNextStatus, setSelectedNextStatus] = useState();
  const disableButton = status === 2 || status === 3;

  const onSelectNextStatus = (nextStatus) => {
    setSelectedNextStatus(nextStatus);
  };

  return (
    <>
      <div className="dropdown d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          disabled={disableButton}
        >
          Ubah Status
        </button>
        <ul className="dropdown-menu">
          {status === 0 && (
            <li>
              <Button
                marginClass="dropdown-item"
                target="#updateStatusModal"
                onClickHandler={() => onSelectNextStatus(1)}
              >
                Ditindaklanjuti
              </Button>
            </li>
          )}
          {status === 1 && (
            <>
              <li>
                <Button
                  marginClass="dropdown-item"
                  target="#updateStatusModal"
                  onClickHandler={() => onSelectNextStatus(2)}
                >
                  Selesai
                </Button>
              </li>
              <li>
                <Button
                  marginClass="dropdown-item"
                  onClickHandler={onShowReasonInput}
                >
                  Ditolak
                </Button>
              </li>
            </>
          )}
        </ul>
      </div>
      <Modal
        id="updateStatusModal"
        title="Konfirmasi Ubah Status"
        body="Pengubahan status berlaku satu arah. Anda tidak bisa mengembalikan ke status sebelumnya."
        cancel="Batal"
        confirm="Ubah"
        variant="btn-danger"
        onConfirm={() => onChangeStatus({ status: selectedNextStatus })}
      />
    </>
  );
}

export default StatusDropdown;
