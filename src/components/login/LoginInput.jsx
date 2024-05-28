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
        type="password"
        value={password}
        onChangeHandler={onPasswordChange}
        placeholder="Password"
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