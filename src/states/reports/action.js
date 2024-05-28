// import api from "../../utils/api";
// import { hideLoading, showLoading } from "react-redux-loading-bar";

// const ActionType = {
//   RECEIVE_REPORTS: "RECEIVE_REPORTS",
//   CREATE_REPORT: "CREATE_REPORT",
// };

// function receiveReportsActionCreator(reports) {
//   return {
//     type: ActionType.RECEIVE_REPORTS,
//     payload: {
//       reports,
//     },
//   };
// }

// function createReportActionCreator(report) {
//   return {
//     type: ActionType.CREATE_REPORT,
//     payload: {
//       report,
//     },
//   };
// }

// function asyncCreateReport({
//   title,
//   type,
//   place_report,
//   date_report,
//   description,
//   evidence,
//   is_anonim,
//   isEdit,
// }) {
//   return async (dispatch) => {
//     dispatch(showLoading());
//     try {
//       const thread = await api.createThread({
//         title,
//         type,
//         place_report,
//         date_report,
//         description,
//         evidence,
//         is_anonim,
//         isEdit,
//       });
//       dispatch(createReportActionCreator(thread));
//     } catch (error) {
//       alert(error.message);
//     }
//     dispatch(hideLoading());
//   };
// }
// export { ActionType, receiveReportsActionCreator, asyncCreateReport };
