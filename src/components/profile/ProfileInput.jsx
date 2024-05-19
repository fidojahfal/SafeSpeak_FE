import React from "react";
import { useInput } from "../../hooks/useInput";

function ProfileInput({
  name,
  jurusan,
  nim,
  user_id,
  telepon,
  updateHandler,
  toView,
}) {
  const [nameInput, onNameInputChange] = useInput(name);
  const [jurusanInput, onJurusanInputChange] = useInput(jurusan);
  const [teleponInput, onTeleponInputChange] = useInput(telepon);
  const [emailInput, onEmailInputChange] = useInput(user_id.email);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    updateHandler({
      name: nameInput,
      jurusan: jurusanInput,
      telepon: teleponInput,
      email: emailInput,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row gy-3 gx-5">
        <div className="col-5">
          <label htmlFor="nama" className="form-profile-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="nama"
            placeholder="Nama"
            value={nameInput}
            onChange={onNameInputChange}
          ></input>
        </div>
        <div className="col-5">
          <label htmlFor="jurusan" className="form-profile-label">
            Jurusan
          </label>
          <input
            type="text"
            className="form-control"
            id="jurusan"
            placeholder="Jurusan"
            value={jurusanInput}
            onChange={onJurusanInputChange}
          ></input>
        </div>
        <div className="col-5">
          <label htmlFor="username" className="form-profile-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder={user_id.username}
            disabled
          ></input>
        </div>
        <div className="col-5">
          <label htmlFor="nomor-telp" className="form-profile-label">
            Nomor Telepon
          </label>
          <input
            type="text"
            className="form-control"
            id="nomor-telp"
            placeholder="085892121758"
            value={teleponInput}
            onChange={onTeleponInputChange}
          ></input>
        </div>
        <div className="col-5">
          <label htmlFor="email" className="form-profile-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={emailInput}
            onChange={onEmailInputChange}
          ></input>
        </div>
        <div className="col-5">
          <label htmlFor="NIM" className="form-profile-label">
            NIM
          </label>
          <input
            type="text"
            className="form-control"
            id="NIM"
            placeholder={nim}
            disabled
          ></input>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          type="button"
          className="btn btn-outline-warning mx-3"
          onClick={toView}
        >
          Kembali
        </button>
        <button type="submit" className="btn btn-primary">
          Simpan
        </button>
      </div>
    </form>
  );
}

export default ProfileInput;
