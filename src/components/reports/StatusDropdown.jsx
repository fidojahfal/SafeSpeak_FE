import Modal from "../form/Modal";
import Button from "../form/Button";
import { asyncUpdateReportStatus } from "../../states/reportDetail/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StatusDropdown({ id, status, onChangeStatus }) {
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedNextStatus, setSelectedNextStatus] = useState();

  // console.log(selectedNextStatus);

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
        >
          Ubah Status
        </button>
        <ul className="dropdown-menu">
          {status === 0 && (
            <li>
              <Button
                marginClass="dropdown-item"
                onClickHandler={() => onChangeStatus(1)}
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
                  target="#updateStatusModal"
                  onClickHandler={() => onSelectNextStatus(3)}
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
        onConfirm={() => onChangeStatus(selectedNextStatus)}
      />
    </>
  );
}

export default StatusDropdown;
