import React from "react";
import { useInput } from "../../hooks/useInput";
import Input from "../form/Input";
import Button from "../form/Button";

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
          colsize="5"
          labelAndId="name"
          type="text"
          val={nameInput}
          onChangeHandler={onNameInputChange}
        >
          Nama
        </Input>
        <Input
          colsize="5"
          labelAndId="jurusan"
          type="text"
          val={jurusanInput}
          onChangeHandler={onJurusanInputChange}
        >
          Jurusan
        </Input>
        <Input
          colsize="5"
          labelAndId="username"
          type="text"
          val={user_id.username}
          disabled
        >
          Username
        </Input>
        <Input
          colsize="5"
          labelAndId="nomor-telp"
          type="text"
          val={teleponInput}
          onChangeHandler={onTeleponInputChange}
        >
          Nomor Telepon
        </Input>
        <Input
          colsize="5"
          labelAndId="email"
          type="email"
          val={emailInput}
          onChangeHandler={onEmailInputChange}
        >
          Email
        </Input>
        <Input colsize="5" labelAndId="NIM" type="text" val={nim} disabled>
          NIM
        </Input>
      </div>
      <div className="d-flex justify-content-center mt-5">
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

export default ProfileInput;
