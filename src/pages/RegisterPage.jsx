import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/Register Components/RegisterInput";

function RegisterPage() {
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    console.log("Register attempt with:", name, email, password);
    navigate("/");
  };

  return (
    <section className="register-page">
      <div className="register-page__left">
        <article className="register-page__main">
          <h2>
            <strong>Sign Up</strong>
          </h2>
          <h3>Silahkan daftar untuk bisa mengakses fitur Lapor</h3>
          <RegisterInput register={onRegister} />
          <p>
            Sudah memiliki akun ?
            <button onClick={() => navigate("/")}>Login</button>
          </p>
        </article>
      </div>
      <div className="register-page__right">
        <header className="register-page__hero">
          <h1>
            <img
              src="../../../public/img/SignIn.png"
              width="400"
              height="387"
            ></img>
          </h1>
        </header>
      </div>
    </section>
  );
}

export default RegisterPage;
