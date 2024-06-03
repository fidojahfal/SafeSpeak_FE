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

export {
  ActionType,
  setNotificationActionCreator,
  unsetNotificationActionCreator,
};
