import { ActionType } from './action';

function userReducer(user = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USER:
      return action.payload.user;
    case ActionType.UPDATE_USER:
      return { ...user, ...action.payload };
    case ActionType.UNSET_USER:
      return action.payload.user;
    default:
      return user;
  }
}

export default userReducer;
