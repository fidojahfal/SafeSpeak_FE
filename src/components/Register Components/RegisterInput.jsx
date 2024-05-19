// RegisterInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Input from "../form/Input";
import Button from "../form/Button";

function RegisterInput({ register }) {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [name, onNameChange] = useInput("");
  const [nim, onNimChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [jurusan, onJurusanChange] = useInput("");
  const [telepon, onTeleponChange] = useInput("");

  return (
    <form className="register-input">
      <Input
        labelAndId="username"
        type="text"
        val={username}
        onChangeHandler={onUsernameChange}
        placeholder="Username"
      >
        Username
      </Input>
      <Input
        labelAndId="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      >
        Password
      </Input>
      <Input
        labelAndId="name"
        type="text"
        val={name}
        onChangeHandler={onNameChange}
        placeholder="Name"
      >
        Name
      </Input>
      <Input
        labelAndId="nim"
        type="number"
        val={nim}
        onChangeHandler={onNimChange}
        placeholder="nim"
      >
        NIM
      </Input>

      <Input
        labelAndId="email"
        type="email"
        val={email}
        onChangeHandler={onEmailChange}
        placeholder="Email"
      >
        Email
      </Input>

      <Input
        labelAndId="jurusan"
        type="text"
        val={jurusan}
        onChangeHandler={onJurusanChange}
        placeholder="Jurusan"
      >
        Jurusan
      </Input>

      <Input
        labelAndId="telepon"
        type="text"
        val={telepon}
        onChangeHandler={onTeleponChange}
        placeholder="Telepon"
      >
        Telepon
      </Input>
      <Button
        marginClass="mt-3 w-100"
        onClickHandler={() =>
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
        Register
      </Button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
