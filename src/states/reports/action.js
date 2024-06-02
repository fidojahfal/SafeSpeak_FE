import { getReports, createReport } from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

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
  time_report,
  description_report,
  urgency,
}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const report = await createReport({
        title,
        type,
        place_report,
        date_report,
        time_report,
        description_report,
        urgency,
      });
      dispatch(createReportActionCreator(report));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncReceiveReports() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const reports = await getReports();
      dispatch(receiveReportsActionCreator(reports));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncCreateReport, asyncReceiveReports };
