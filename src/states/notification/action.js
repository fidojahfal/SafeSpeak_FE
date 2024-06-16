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

function setNotificationSuccess(message) {
  return async (dispatch) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    dispatch(setNotificationSuccessActionCreator({ message: message }));

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3500);
    });

    dispatch(unsetNotificationActionCreator());
  };
}

function setNotificationDanger(message) {
  return async (dispatch) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    dispatch(setNotificationDangerActionCreator({ message: message }));

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3500);
    });

    dispatch(unsetNotificationActionCreator());
  };
}

export {
  ActionType,
  setNotificationSuccessActionCreator,
  setNotificationDangerActionCreator,
  unsetNotificationActionCreator,
  setNotificationSuccess,
  setNotificationDanger,
};
