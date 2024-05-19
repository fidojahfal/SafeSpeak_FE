import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/Login Components/LoginInput";

function LoginPage() {
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    console.log("Login attempt with:", email, password);
    // Place your login logic here
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <section className="login-page">
      <div className="login-page__left">
        <header className="login-page__hero">
          <h1>
            <img
              src="../../../public/img/LogIn.png"
              width="400"
              height="387"
            ></img>
          </h1>
        </header>
      </div>
      <div className="login-page__right">
        <article className="login-page__main">
          <h2>
            <strong> Log In</strong>
          </h2>
          <h3>Silahkan masuk untuk mengakses fitur Lapor</h3>
          <LoginInput login={onLogin} />
          <p>
            Belum memiliki akun ?
            <button onClick={goToRegister}>Register</button>
          </p>
        </article>
      </div>
    </section>
  );
}

export default LoginPage;