import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/Register Components/RegisterInput";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/user/action.js";
import { Link } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({
    username,
    password,
    name,
    nim,
    email,
    jurusan,
    telepon,
  }) => {
    dispatch(
      asyncRegisterUser({
        username,
        password,
        name,
        nim,
        email,
        jurusan,
        telepon,
      })
    );
    navigate("/");
  };

  return (
    <section className="register-page">
      <div className="register-page__left">
        <div className="d-flex align-items-center pe-2 ms-3">
          <img
            src="/logo/SafeSpeak-Logo.svg"
            alt="SafeSpeak Logo"
            className="nav-logo pe-2"
          />
          <p className="fs-5 fw-bold m-0 text-primary">SafeSpeak</p>
        </div>
        <article className="register-page__main">
          <h2>
            <strong>Sign Up</strong>
          </h2>
          <h3>Silahkan daftar untuk bisa mengakses fitur Lapor</h3>
          <RegisterInput register={onRegister} />
          <div className="d-flex align-items-center mt-4 link-login-register-group">
            <p className="m-0 text-secondary">Sudah memiliki akun?</p>
            <Link to="/" className="ms-1">
              <p className="m-0 text-secondary fw-bold">Login</p>
            </Link>
          </div>
        </article>
      </div>
      <div className="register-page__right">
        <header className="register-page__hero">
          <h1>
            <img
              src="../../../public/img/SignIn.png"
              width="415"
              height="380"
            ></img>
          </h1>
        </header>
      </div>
    </section>
  );
}

export default RegisterPage;
