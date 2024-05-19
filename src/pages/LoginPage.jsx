import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/Login Components/LoginInput";
import Button from "../components/form/Button";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";
import { Link } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ username, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ username, password }));
    navigate("/");
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
          <div className="d-flex align-items-center mt-4">
            <p className="m-0">Belum memiliki akun?</p>
            <Link to="/register">Register</Link>
          </div>
          ///
        </article>
      </div>
    </section>
  );
}

export default LoginPage;
