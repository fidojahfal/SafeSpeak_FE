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
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1 align-items-center">
        <div className="col-lg-6 d-flex flex-column justify-content-center p-4">
          <div className="d-flex align-items-center mb-4">
            <img
              src="/logo/SafeSpeak-Logo.svg"
              alt="SafeSpeak Logo"
              className="me-2"
              style={{ width: "35px" }}
            />
            <p className="fs-5 fw-bold text-primary m-0">SafeSpeak</p>
          </div>
          <h2 className="text-center text-primary">Sign Up</h2>
          <h3 className="text-center text-secondary">
            Silahkan daftar untuk bisa mengakses fitur Lapor
          </h3>
          <RegisterInput register={onRegister} />
          <div className="d-flex align-items-center mt-4 justify-content-center">
            <p className="m-0 text-secondary">Sudah memiliki akun?</p>
            <Link to="/" className="ms-1 text-secondary fw-bold">
              Login
            </Link>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-light">
          <img src="/img/SignIn.png" className="img-fluid" alt="Register" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
