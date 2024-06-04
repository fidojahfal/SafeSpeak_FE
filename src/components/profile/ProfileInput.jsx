import React from "react";
import { useInput } from "../../hooks/useInput";
import Input from "../form/Input";
import Button from "../form/Button";
import { PropTypes } from "prop-types";

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
        <Input
          divClassName="col-md-5"
          labelAndId="name"
          type="text"
          value={nameInput}
          onChangeHandler={onNameInputChange}
          required
        >
          Nama
        </Input>
        <Input
          divClassName="col-md-5"
          labelAndId="jurusan"
          type="text"
          value={jurusanInput}
          onChangeHandler={onJurusanInputChange}
          required
        >
          Jurusan
        </Input>
        <Input
          divClassName="col-md-5"
          labelAndId="username"
          type="text"
          value={user_id.username}
          disabled
        >
          Username
        </Input>
        <Input
          divClassName="col-md-5"
          labelAndId="nomor-telp"
          type="text"
          value={teleponInput}
          onChangeHandler={onTeleponInputChange}
          required
        >
          Nomor Telepon
        </Input>
        <Input
          divClassName="col-md-5"
          labelAndId="email"
          type="email"
          value={emailInput}
          onChangeHandler={onEmailInputChange}
          required
        >
          Email
        </Input>
        <Input
          divClassName="col-md-5"
          labelAndId="NIM"
          type="text"
          value={nim}
          disabled
        >
          NIM
        </Input>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5 gap-3">
        <Button
          type="button"
          primaryOrOutline="outline-warning"
          marginClass="mx-3"
          onClickHandler={toView}
        >
          Kembali
        </Button>
        <Button type="submit">Simpan</Button>
      </div>
    </form>
  );
}

ProfileInput.propTypes = {
  name: PropTypes.string.isRequired,
  jurusan: PropTypes.string.isRequired,
  nim: PropTypes.number.isRequired,
  user_id: PropTypes.object.isRequired,
  telepon: PropTypes.string.isRequired,
  updateHandler: PropTypes.func.isRequired,
  toView: PropTypes.func.isRequired,
};

export default ProfileInput;
