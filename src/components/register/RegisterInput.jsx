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
        labelAndId="username"
        labelClassName="form-blue-label"
        type="text"
        value={username}
        onChangeHandler={onUsernameChange}
        placeholder="Username"
        required
        minLength="5"
      >
        Username
      </Input>
      <Input
        labelAndId="password"
        labelClassName="form-blue-label"
        type="password"
        value={password}
        onChangeHandler={onPasswordChange}
        placeholder="Password"
        required
        minLength="8"
      >
        Password
      </Input>
      <Input
        labelAndId="name"
        labelClassName="form-blue-label"
        type="text"
        value={name}
        onChangeHandler={onNameChange}
        placeholder="Name"
        required
        minLength="5"
      >
        Name
      </Input>
      <Input
        labelAndId="nim"
        labelClassName="form-blue-label"
        type="number"
        value={nim}
        onChangeHandler={onNimChange}
        placeholder="nim"
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
        placeholder="Email"
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
        placeholder="Jurusan"
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
        placeholder="Telepon"
        required
        minLength="10"
        maxLength="13"
      >
        Telepon
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
