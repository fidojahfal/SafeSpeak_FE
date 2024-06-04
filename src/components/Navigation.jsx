import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import Button from "./form/Button";
import { useNavigate } from "react-router-dom";

function Navigation({ onLogout, authUser }) {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
        <Link style={{ textDecoration: "none" }}>
          <div className="d-flex align-items-center pe-2">
            <img
              src="/logo/SafeSpeak-Logo.svg"
              alt="SafeSpeak Logo"
              className="nav-logo pe-2"
            />
            <p className="fs-5 fw-bold m-0">SafeSpeak</p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex w-100 align-items-center">
            <Link to="/" className="nav-link">
              Beranda
            </Link>
            {authUser && authUser.role === 0 ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Laporan
                </a>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/reports/create">
                    Buat Laporan
                  </Link>
                  <Link className="dropdown-item" to="/reports">
                    Lihat Semua Laporan
                  </Link>
                </ul>
              </li>
            ) : (
              <Link className="nav-link" to="/reports">
                Laporan
              </Link>
            )}
            {authUser && authUser.role === 1 ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artikel
                </a>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/articles/create">
                    Buat Artikel
                  </Link>
                  <Link className="dropdown-item" to="/articles">
                    Lihat Semua Artikel
                  </Link>
                </ul>
              </li>
            ) : (
              <Link className="nav-link" to="/articles">
                Artikel
              </Link>
            )}
            <Link className="nav-link" to="/about">
              Tentang
            </Link>
            {authUser ? (
              <>
                <a
                  className="nav-link ms-lg-auto"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <IconContext.Provider
                    value={{ color: "#ffc107", size: "35px" }}
                  >
                    <div>
                      <BsPersonCircle />
                    </div>
                  </IconContext.Provider>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="dropdown-item">
                    {<Link to={`/profile/${authUser._id}`}>Detail</Link>}
                  </li>
                  <li className="dropdown-item">
                    <Link onClick={() => onLogout()}>Log out</Link>
                  </li>
                </ul>
              </>
            ) : (
              <Button marginClass="ms-lg-auto" onClickHandler={goToLogin}>
                Log In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
