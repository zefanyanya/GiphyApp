import { configureStore } from "@reduxjs/toolkit";

import queryReducer from "./queryReducer/queryReducer";

export default configureStore({
  reducer: {
    query: queryReducer,
    // results:resultreducer
  },
  // devTools: trues
});
