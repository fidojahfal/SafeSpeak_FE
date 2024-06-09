// reducer.js
import { ActionType } from "./action";

const initialState = {
  total: 0,
  status_0: 0,
  status_1: 0,
  status_2: 0,
};

export default function reportReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_REPORT_COUNT:
      return {
        ...state,
        ...action.payload.counts,
      };
    default:
      return state;
  }
}
