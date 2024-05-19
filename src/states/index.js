import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import userReducer from './user/reducer';
import isPreloadReducer from './isPreload/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    user: userReducer,
    isPreload: isPreloadReducer,
  },
});

export default store;
