import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../form/Button";
import Input from "../form/Input";
import Modal from "../form/Modal";

function ReasonInput({ submitHandler, reasonValue }) {
  const [reasonInput, onReasonInputChange] = useInput(reasonValue || "");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    submitHandler({
      status: 3,
      reason: reasonInput,
    });
  };

  return (
    <div className="card mt-4 p-3">
      <div className="card-body">
        <h5 className="m-0">Alasan Penolakan</h5>
        <form onSubmit={onSubmitHandler}>
          <Input
            divClassName="col-12"
            labelAndId="deskripsi"
            type="textarea"
            inputClassName="form-control deskripsi"
            value={reasonInput}
            onChangeHandler={onReasonInputChange}
            required
            disabled={reasonValue ? true : false}
          ></Input>
          <div className="d-flex justify-content-center mt-3">
            <Button
              target="#updateStatusModalDitolak"
              disabled={reasonValue ? true : false}
            >
              Simpan
            </Button>
          </div>
          <Modal
            id="updateStatusModalDitolak"
            title="Konfirmasi Ubah Status"
            body="Pengubahan status berlaku satu arah. Anda tidak bisa mengembalikan ke status sebelumnya."
            cancel="Batal"
            confirm="Ubah"
            variant="btn-danger"
            confirmButtonType="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default ReasonInput;
