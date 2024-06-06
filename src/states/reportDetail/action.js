import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getReportById, updateStatus } from "../../utils/api";
import { setNotificationActionCreator } from "../notification/action";

const ActionType = {
  RECEIVE_REPORT_DETAIL: "RECEIVE_REPORT_DETAIL",
  UPDATE_STATUS_REPORT: "UPDATE_STATUS_REPORT",
};

function receiveReportDetailActionCreator(reportDetail) {
  return {
    type: ActionType.RECEIVE_REPORT_DETAIL,
    payload: {
      reportDetail,
    },
  };
}

function updateStatusReportActionCreator({ status, reason }) {
  return {
    type: ActionType.UPDATE_STATUS_REPORT,
    payload: {
      status,
      reason,
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

function asyncUpdateReportStatus({ id, status, reason }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      console.log(id);
      await updateStatus({ id, status, reason });
      dispatch(updateStatusReportActionCreator({ status, reason }));
    } catch (error) {
      dispatch(setNotificationActionCreator(error.message));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveReportDetail, asyncUpdateReportStatus };
