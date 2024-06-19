import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getUser, register, updateUser } from '../../utils/api';
import {
  setNotificationDanger,
  setNotificationSuccess,
} from '../notification/action';

const ActionType = {
  RECEIVE_USER: 'RECEIVE_USER',
  UPDATE_USER: 'UPDATE_USER',
  UNSET_USER: 'UNSET_USER',
};

function receiveUserActionCreator(user) {
  return {
    type: ActionType.RECEIVE_USER,
    payload: {
      user,
    },
  };
}

function updateUserActionCreator({ name, email, telepon, jurusan }) {
  return {
    type: ActionType.UPDATE_USER,
    payload: {
      name,
      jurusan,
      telepon,
      email,
    },
  };
}

function unsetUserActionCreator() {
  return {
    type: ActionType.UNSET_USER,
    payload: { user: null },
  };
}

function asyncRegisterUser({
  username,
  password,
  name,
  nim,
  email,
  jurusan,
  telepon,
}) {
  return async (dispatch) => {
    try {
      await register({
        username,
        password,
        name,
        nim,
        email,
        jurusan,
        telepon,
      });
    } catch (error) {
      alert(error);
    }
  };
}

function asyncReceiveUser() {
  return async (dispatch, getStates) => {
    dispatch(showLoading());
    const { authUser } = getStates();
    try {
      const user = await getUser(authUser._id);
      dispatch(receiveUserActionCreator(user));
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateUser({ name, email, telepon, jurusan, id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await updateUser({ name, email, telepon, jurusan, id });
      dispatch(updateUserActionCreator({ name, email, telepon, jurusan, id }));
      dispatch(setNotificationSuccess('Profile successfully updated.'));
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetUser() {
  return async (dispatch) => {
    dispatch(unsetUserActionCreator());
  };
}

export {
  ActionType,
  receiveUserActionCreator,
  updateUserActionCreator,
  asyncReceiveUser,
  asyncRegisterUser,
  asyncUpdateUser,
  asyncUnsetUser,
};
