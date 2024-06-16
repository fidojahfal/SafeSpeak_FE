import {
  deleteReport,
  getAllreports,
  getReportsByUserId,
  insertReport,
  getReportById,
} from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  setNotificationDanger,
  setNotificationSuccess,
} from "../notification/action";

const ActionType = {
  RECEIVE_REPORTS: "RECEIVE_REPORTS",
  CREATE_REPORT: "CREATE_REPORT",
  DELETE_REPORT: "DELETE_REPORT",
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

function deleteReportActionCreator(report_id) {
  return {
    type: ActionType.DELETE_REPORT,
    payload: {
      report_id,
    },
  };
}

function asyncReceiveReports() {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    try {
      let reports;
      if (authUser.role) {
        reports = await getAllreports();
        return dispatch(receiveReportsActionCreator(reports));
      }
      reports = await getReportsByUserId(authUser._id);
      dispatch(receiveReportsActionCreator(reports));
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
    } finally {
      dispatch(hideLoading());
    }
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
      const report = await insertReport({
        title,
        type,
        place_report,
        date_report,
        description,
        evidence,
        is_anonim,
      });

      if (report) {
        await dispatch(createReportActionCreator(report));
      }
      dispatch(setNotificationSuccess("Berhasil membuat laporan"));
      return true;
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDeleteReport(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await deleteReport(id);
      dispatch(deleteReportActionCreator(id));
      dispatch(setNotificationSuccess("Berhasil menghapus laporan"));
    } catch (error) {
      dispatch(setNotificationDanger(error.message));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveReportsActionCreator,
  asyncCreateReport,
  asyncReceiveReports,
  deleteReportActionCreator,
  asyncDeleteReport,
};
