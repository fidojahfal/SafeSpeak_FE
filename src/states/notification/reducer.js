import { ActionType } from "./action";

function notificationReducer(notification = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_NOTIFICATION:
      return action.payload.notification;
    case ActionType.UNSET_NOTIFICATION:
      return action.payload.notification;
    default:
      return notification;
  }
}

export default notificationReducer;
