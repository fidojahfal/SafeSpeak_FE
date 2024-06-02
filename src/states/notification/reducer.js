import { ActionType } from "./action";

function notificationReducer(notification = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_NOTIFICATION:
      return action.payload.message;
    case ActionType.UNSET_NOTIFICATION:
      return action.payload.message;
    default:
      return notification;
  }
}

export default notificationReducer;
