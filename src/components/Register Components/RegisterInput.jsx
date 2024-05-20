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
        type="text"
        val={username}
        onChangeHandler={onUsernameChange}
        placeholder="Username"
        required
        min="5"
      >
        Username
      </Input>
      <Input
        labelAndId="password"
        type="password"
        val={password}
        onChangeHandler={onPasswordChange}
        placeholder="Password"
        required
        min="8"
      >
        Password
      </Input>
      <Input
        labelAndId="name"
        type="text"
        val={name}
        onChangeHandler={onNameChange}
        placeholder="Name"
        required
        min="5"
      >
        Name
      </Input>
      <Input
        labelAndId="nim"
        type="number"
        val={nim}
        onChangeHandler={onNimChange}
        placeholder="nim"
        required
        min="0"
      >
        NIM
      </Input>

      <Input
        labelAndId="email"
        type="email"
        val={email}
        onChangeHandler={onEmailChange}
        placeholder="Email"
        required
      >
        Email
      </Input>

      <Input
        labelAndId="jurusan"
        type="text"
        val={jurusan}
        onChangeHandler={onJurusanChange}
        placeholder="Jurusan"
        required
        min="5"
      >
        Jurusan
      </Input>

      <Input
        labelAndId="telepon"
        type="text"
        val={telepon}
        onChangeHandler={onTeleponChange}
        placeholder="Telepon"
        required
        min="10"
        max="13"
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
