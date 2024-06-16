// states/updateReport/action.js
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getReportById, updateReport } from "../../utils/api";
import {
  setNotificationSuccess,
  setNotificationDanger,
} from "../notification/action";

const ActionType = {
  RECEIVE_UPDATE_REPORT_DETAIL: "RECEIVE_UPDATE_REPORT_DETAIL",
  UPDATE_REPORT: "UPDATE_REPORT",
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
      await updateReport(report);
      const updatedReportDetail = await getReportById(report.id);
      dispatch(updateReportActionCreator(updatedReportDetail));
      dispatch(setNotificationSuccess("Report successfully updated"));
      return true;
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, asyncReceiveUpdateReportDetail, asyncUpdateReport };
