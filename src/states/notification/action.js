const ActionType = {
  SET_NOTIFICATION: "SET_NOTIFICATION",
  UNSET_NOTIFICATION: "UNSET_NOTIFICATION",
};

function setNotificationDangerActionCreator({ message }) {
  return {
    type: ActionType.SET_NOTIFICATION,
    payload: {
      notification: {
        message,
        type: "danger",
      },
    },
  };
}

function setNotificationSuccessActionCreator({ message }) {
  return {
    type: ActionType.SET_NOTIFICATION,
    payload: {
      notification: {
        message,
        type: "success",
      },
    },
  };
}

function unsetNotificationActionCreator() {
  return {
    type: ActionType.UNSET_NOTIFICATION,
    payload: {
      notification: null,
    },
  };
}

export {
  ActionType,
  setNotificationSuccessActionCreator,
  setNotificationDangerActionCreator,
  unsetNotificationActionCreator,
};
