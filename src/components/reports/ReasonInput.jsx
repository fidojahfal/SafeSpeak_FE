import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../form/Button";
import Input from "../form/Input";
import Modal from "../form/Modal";

function ReasonInput({ submitHandler }) {
  const [reasonInput, onReasonInputChange] = useInput("");
  const [disableInput, setDisableInput] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      status: 3,
      reason: reasonInput,
    });
    submitHandler({
      status: 3,
      reason: reasonInput,
    });
    setDisableInput(true);
    console.log(disableInput);
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
            disabled={disableInput}
          ></Input>
          <div className="d-flex justify-content-center mt-3">
            <Button target="#updateStatusModalDitolak" disabled={disableInput}>
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
