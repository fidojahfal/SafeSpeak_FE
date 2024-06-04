import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getOwnProfile, login, putAccessToken } from "../../utils/api";
import { setNotificationActionCreator } from "../notification/action";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ username, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await login({ username, password });
      putAccessToken(token);

      const authUser = await getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
      return true;
    } catch (error) {
      dispatch(setNotificationActionCreator(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    putAccessToken("");
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
