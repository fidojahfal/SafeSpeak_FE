const ActionType = {
  SET_NOTIFICATION: "SET_NOTIFICATION",
  UNSET_NOTIFICATION: "UNSET_NOTIFICATION",
};

function setNotificationActionCreator(message) {
  return {
    type: ActionType.SET_NOTIFICATION,
    payload: {
      message,
    },
  };
}

function unsetNotificationActionCreator() {
  return {
    type: ActionType.UNSET_NOTIFICATION,
    payload: {
      message: null,
    },
  };
}

function asyncSetNotification(message) {
  return async (dispatch) => {
    await dispatch(setNotificationActionCreator(message));
  };
}

export {
  ActionType,
  setNotificationActionCreator,
  unsetNotificationActionCreator,
  asyncSetNotification,
};
