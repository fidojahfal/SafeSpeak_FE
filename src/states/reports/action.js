import { insertReport } from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { setNotificationActionCreator } from "../notification/action";

const ActionType = {
  RECEIVE_REPORTS: "RECEIVE_REPORTS",
  CREATE_REPORT: "CREATE_REPORT",
};

function receiveReportsActionCreator(reports) {
  return {
    type: ActionType.RECEIVE_REPORTS,
    payload: {
      reports,
    },
  };
}

function createReportActionCreator(report) {
  return {
    type: ActionType.CREATE_REPORT,
    payload: {
      report,
    },
  };
}

function asyncCreateReport({
  title,
  type,
  place_report,
  date_report,
  description,
  evidence,
  is_anonim,
}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const report = {
        title,
        type,
        place_report,
        date_report,
        description,
        evidence,
        is_anonim,
      };
      await insertReport(report);
      dispatch(createReportActionCreator(report));
    } catch (error) {
      dispatch(setNotificationActionCreator(error.message));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveReportsActionCreator, asyncCreateReport };
