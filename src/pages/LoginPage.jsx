// LoginPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  const onLogin = ({ email, password }) => {
    // @TODO: Handle login without using useDispatch
    console.log("Login attempt with:", email, password);
    // Place your login logic here
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <h1>Gaming Portal</h1>
      </header>
      <article className="login-page__main">
        <h2>
          Let's
          <strong> Play MLBB</strong>
          <br />
          Having Fun and Discussion in Here.
        </h2>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
