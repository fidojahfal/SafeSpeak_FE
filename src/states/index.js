import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import userReducer from "./user/reducer";
import isPreloadReducer from "./isPreload/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import reportsReducer from "./reports/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    user: userReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    reports: reportsReducer,
  },
});

export default store;
