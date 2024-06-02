import { ActionType } from "./action";

export default function reportDetailReducer(reportDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_REPORT_DETAIL:
      return action.payload.reportDetail;
    default:
      return reportDetail;
  }
}
