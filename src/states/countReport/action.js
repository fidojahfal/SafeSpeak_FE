import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getCountReports } from "../../utils/api";

const ActionType = {
  RECEIVE_REPORT_COUNT: "RECEIVE_REPORT_COUNT",
};

function receiveReportCountActionCreator(counts) {
  return {
    type: ActionType.RECEIVE_REPORT_COUNT,
    payload: {
      counts,
    },
  };
}

function asyncReceiveReportCount() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const counts = await getCountReports();
      dispatch(receiveReportCountActionCreator(counts));
    } catch (error) {
      console.error(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveReportCount };
