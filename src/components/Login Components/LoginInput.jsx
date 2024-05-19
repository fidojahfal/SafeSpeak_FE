// LoginInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Input from "../form/Input";
import Button from "../form/Button";

function LoginInput({ login }) {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="login-input">
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
        val={password}
        onChangeHandler={onPasswordChange}
        placeholder="Password"
      >
        Password
      </Input>
      <Button
        className="btn"
        type="button"
        onClickHandler={() => login({ username, password })}
      >
        Login
      </Button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
