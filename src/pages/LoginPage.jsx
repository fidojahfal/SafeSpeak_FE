import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginInput from "../components/login/LoginInput";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";
import GeneralLogin from "../components/shared/GeneralLogin";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onLogin = async ({ username, password }) => {
    const success = await dispatch(asyncSetAuthUser({ username, password }));
    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <GeneralLogin>
      <LoginInput login={onLogin} />
    </GeneralLogin>
  );
}

export default LoginPage;
