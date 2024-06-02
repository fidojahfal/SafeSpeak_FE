import {
  deleteReport,
  getAllreports,
  getReportsByUserId,
  insertReport,
} from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { setNotificationActionCreator } from '../notification/action';

const ActionType = {
  RECEIVE_REPORTS: 'RECEIVE_REPORTS',
  CREATE_REPORT: 'CREATE_REPORT',
  DELETE_REPORT: 'DELETE_REPORT',
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
      dispatch(setNotificationActionCreator(error.message));
    }
    dispatch(hideLoading());
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

function asyncDeleteReport(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await deleteReport(id);
      dispatch(deleteReportActionCreator(id));
    } catch (error) {
      dispatch(setNotificationActionCreator(error.message));
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
