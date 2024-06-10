import { ActionType } from './action';

export default function reportDetailReducer(reportDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_REPORT_DETAIL:
      return action.payload.reportDetail;
    case ActionType.UPDATE_STATUS_REPORT:
      return {
        ...reportDetail,
        status: action.payload.status,
        reason: action.payload.reason,
      };
    default:
      return reportDetail;
  }
}
