// LoginInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="login-input">
      <p>
        <b>Username</b>
      </p>
      <input
        id="username"
        type="text"
        value={username}
        onChange={onUsernameChange}
        placeholder="Username"
      />
      <p>
        <b>Password</b>
      </p>
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button className="btn" type="button" onClick={() => login({ username, password })}>
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
