import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/register/RegisterInput";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/user/action.js";
import GeneralRegister from "../components/shared/GeneralRegister.jsx";

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
    navigate("/login");
  };

  return (
    <GeneralRegister>
      <RegisterInput register={onRegister} />
    </GeneralRegister>
  );
}

export default RegisterPage;
