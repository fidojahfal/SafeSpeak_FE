// LoginInput.jsx
import React from "react";
import PropTypes from "prop-types";
import { useInput } from "../../hooks/useInput";
import Input from "../form/Input";
import Button from "../form/Button";

function LoginInput({ login }) {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form
      className="login-input"
      onSubmit={(event) => {
        event.preventDefault();
        login({
          username,
          password,
        });
      }}
    >
      <Input
        labelAndId="username"
        labelClassName="form-blue-label"
        type="text"
        value={username}
        onChangeHandler={onUsernameChange}
        placeholder="Masukkan username kamu"
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
        placeholder="Masukkan password kamu"
        required
        minLength="8"
      >
        Password
      </Input>
      <Button type="submit" marginClass="mt-3 w-100">
        Login
      </Button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
