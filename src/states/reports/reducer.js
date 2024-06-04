import { ActionType } from './action';

export default function reportsReducer(reports = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_REPORTS:
      return action.payload.reports;
    case ActionType.CREATE_REPORT:
      return [action.payload.report, ...reports];
    case ActionType.DELETE_REPORT:
      return reports.filter(
        (report) => report._id !== action.payload.report_id
      );
    default:
      return reports;
  }
}
