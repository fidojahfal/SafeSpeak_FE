import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getReportById } from "../../utils/api";

const ActionType = {
  RECEIVE_REPORT_DETAIL: "RECEIVE_REPORT_DETAIL",
};

function receiveReportDetailActionCreator(reportDetail) {
  return {
    type: ActionType.RECEIVE_REPORT_DETAIL,
    payload: {
      reportDetail,
    },
  };
}

function asyncReceiveReportDetail(reportId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const reportDetail = await getReportById(reportId);
      dispatch(receiveReportDetailActionCreator(reportDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveReportDetail };
