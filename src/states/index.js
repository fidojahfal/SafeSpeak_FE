import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import userReducer from "./user/reducer";
import isPreloadReducer from "./isPreload/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import reportsReducer from "./reports/reducer";
import notificationReducer from "./notification/reducer";
import reportDetailReducer from "./reportDetail/reducer";
import updateReportReducer from "./updateReport/reducer";
import articlesReducer from "./articles/reducer";
import detailArticleReducer from "./articleDetail/reducer";
import countReportReducer from "./countReport/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    user: userReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    reports: reportsReducer,
    notification: notificationReducer,
    reportDetail: reportDetailReducer,
    updateReport: updateReportReducer,
    articles: articlesReducer,
    articleDetail: detailArticleReducer,
    countReport: countReportReducer,
  },
});

export default store;
