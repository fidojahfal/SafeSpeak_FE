import { ActionType } from './action';

function userReducer(user = null, action = {}) {
  switch (action.ActionType) {
    case ActionType.RECEIVE_USER:
      return action.payload.user;
    case ActionType.UPDATE_USER:
      return { ...user, ...action.payload };
    default:
      return user;
  }
}

export default userReducer;
