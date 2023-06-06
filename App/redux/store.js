import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "../slices/navigationSlice";

// use configure store
const store = configureStore({
  reducer: {
    nav: navigationReducer,
  },
});

export default store;
