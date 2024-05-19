// RegisterInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

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
      <p>
        <b>Username</b>
      </p>
      <input
        type="text"
        value={username}
        onChange={onUsernameChange}
        placeholder="Username"
      />
      <p>
        <b>Password</b>
      </p>
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <p>
        <b>Name</b>
      </p>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />
      <p>
        <b>NIM</b>
      </p>
      <input type="text" value={nim} onChange={onNimChange} placeholder="nim" />
      <p>
        <b>Email</b>
      </p>
      <input
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <p>
        <b>Jurusan</b>
      </p>
      <input
        type="text"
        value={jurusan}
        onChange={onJurusanChange}
        placeholder="Jurusan"
      />
      <p>
        <b>Telepon</b>
      </p>
      <input
        type="text"
        value={telepon}
        onChange={onTeleponChange}
        placeholder="Telepon"
      />
      <button type="button" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
