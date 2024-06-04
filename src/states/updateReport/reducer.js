// states/updateReport/reducer.js
import { ActionType } from "./action";

export default function updateReportReducer(reportDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_UPDATE_REPORT_DETAIL:
      return action.payload.reportDetail;
    case ActionType.UPDATE_REPORT:
      return action.payload.reportDetail;
    default:
      return reportDetail;
  }
}
