import React from "react";
import { Link } from "react-router-dom";
import Alert from "../form/Alert";
import PropTypes from "prop-types";

function GeneralRegister({ children }) {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1 align-items-center">
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5 position-relative mb-5">
          <div className="d-flex align-items-center ps-2 position-absolute top-0 start-0 mt-3 ms-3 mb-5">
            <img
              src="../../logo/SafeSpeak-Logo.svg"
              alt="SafeSpeak Logo"
              className="me-2"
              style={{ width: "35px" }}
            />
            <p className="fs-5 fw-bold text-primary m-0">SafeSpeak</p>
          </div>
          <div className="px-5">
            <Alert />
          </div>
          <div className="py-5">
            <h4 className="text-center text-primary fw-bold">Sign Up</h4>
            <p className="text-center text-primary">
              Silahkan daftar untuk bisa mengakses fitur Lapor
            </p>
            {children}
            <div className="d-flex align-items-center mt-4 justify-content-center">
              <p className="m-0 text-secondary">Sudah memiliki akun?</p>
              <Link to="/login" className="ms-1 text-secondary fw-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-light-custom position-fixed top-0 end-0 min-vh-100 gx-0">
          <div className="register-image container w-125 h-125 d-flex justify-content-center align-items-center">
            <img
              src="../../img/SignIn.png"
              className="custom-img-size"
              alt="Register"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

GeneralRegister.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralRegister;
