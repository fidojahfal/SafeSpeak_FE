// RegisterInput.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useInput } from "../../hooks/useInput";
import Input from "../form/Input";
import Button from "../form/Button";
import { useInputStringNumberValidation } from "../../hooks/useInputStringNumber";

function RegisterInput({ register }) {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [name, onNameChange] = useInput("");
  const [nim, onNimChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [jurusan, onJurusanChange] = useInput("");
  const [telepon, onTeleponChange] = useInputStringNumberValidation("");

  return (
    <form
      className="register-input"
      onSubmit={() =>
        register({
          username,
          password,
          name,
          nim,
          email,
          jurusan,
          telepon,
        })
      }
    >
      <Input
        labelAndId="name"
        labelClassName="form-blue-label"
        type="text"
        value={name}
        onChangeHandler={onNameChange}
        placeholder="Masukkan nama lengkap kamu"
        required
        minLength="5"
      >
        Nama Lengkap
      </Input>

      <Input
        labelAndId="username"
        labelClassName="form-blue-label"
        type="text"
        value={username}
        onChangeHandler={onUsernameChange}
        placeholder="Masukkan username yang diinginkan"
        required
        minLength="5"
      >
        Username
      </Input>

      <Input
        labelAndId="nim"
        labelClassName="form-blue-label"
        type="number"
        value={nim}
        onChangeHandler={onNimChange}
        placeholder="Masukkan NIM kamu"
        min="0"
        max="999999999999"
        required
      >
        NIM
      </Input>

      <Input
        labelAndId="email"
        labelClassName="form-blue-label"
        type="email"
        value={email}
        onChangeHandler={onEmailChange}
        placeholder="Masukkan email kamu"
        required
      >
        Email
      </Input>

      <Input
        labelAndId="jurusan"
        labelClassName="form-blue-label"
        type="text"
        value={jurusan}
        onChangeHandler={onJurusanChange}
        placeholder="Masukkan jurusan kamu"
        required
        minLength="5"
      >
        Jurusan
      </Input>

      <Input
        labelAndId="telepon"
        labelClassName="form-blue-label"
        type="text"
        value={telepon}
        onChangeHandler={onTeleponChange}
        placeholder="Masukkan nomor telepon kamu"
        required
        minLength="10"
        maxLength="13"
      >
        Nomor Telepon
      </Input>

      <Input
        labelAndId="password"
        labelClassName="form-blue-label"
        type="password"
        value={password}
        onChangeHandler={onPasswordChange}
        placeholder="Masukkan password kamu"
        required
        minLength="8"
      >
        Password
      </Input>

      <Button type="submit" marginClass="mt-3 w-100">
        Register
      </Button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
