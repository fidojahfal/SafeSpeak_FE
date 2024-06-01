import { ActionType } from "./action";

export default function reportsReducer(reports = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_REPORTS:
      return action.payload.reports;
    case ActionType.CREATE_REPORT:
      return [action.payload.report, ...reports];
    default:
      return reports;
  }
}
