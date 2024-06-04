// states/updateReport/action.js
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getReportById, updateReport } from "../../utils/api";

const ActionType = {
  RECEIVE_UPDATE_REPORT_DETAIL: "RECEIVE_UPDATE_REPORT_DETAIL",
  UPDATE_REPORT: "UPDATE_REPORT",
  UPDATE_STATUS_REPORT: "UPDATE_STATUS_REPORT",
};

function receiveUpdateReportDetailActionCreator(reportDetail) {
  return {
    type: ActionType.RECEIVE_UPDATE_REPORT_DETAIL,
    payload: {
      reportDetail,
    },
  };
}

function updateReportActionCreator(reportDetail) {
  return {
    type: ActionType.UPDATE_REPORT,
    payload: {
      reportDetail,
    },
  };
}

function asyncReceiveUpdateReportDetail(reportId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const reportDetail = await getReportById(reportId);
      dispatch(receiveUpdateReportDetailActionCreator(reportDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateReport(report) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const message = await updateReport(report);
      const updatedReportDetail = await getReportById(report.id);
      dispatch(updateReportActionCreator(updatedReportDetail));
      alert(message);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveUpdateReportDetail, asyncUpdateReport };
