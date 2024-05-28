import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/login/LoginInput";
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
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
          <div className="Login-image container w-125">
            <img
              src="/img/LogIn.png"
              className="img-fluid custom-img-size"
              alt="Register"
            />
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center p-4 position-relative">
          <div className="d-flex align-items-center pe-2 ms-auto me-3 position-absolute top-0 end-0 mt-3 me-3">
            <img
              src="/logo/SafeSpeak-Logo.svg"
              alt="SafeSpeak Logo"
              className="nav-logo pe-2"
            />
            <p className="fs-5 fw-bold m-0 text-primary">SafeSpeak</p>
          </div>
          <div className="p-5">
            <h2 className="text-center text-primary">Sign In</h2>
            <h3 className="text-center text-secondary">
              Silahkan masuk untuk mengakses fitur Lapor
            </h3>
            <LoginInput login={onLogin} />
            <div className="d-flex align-items-center mt-4 justify-content-center">
              <p className="m-0 text-secondary">Belum memiliki akun?</p>
              <Link to="/register" className="ms-1">
                <p className="m-0 text-secondary fw-bold">Daftar disini.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
