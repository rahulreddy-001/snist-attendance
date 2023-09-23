import { configureStore } from "@reduxjs/toolkit";

import sessionSlice from "./sessionSlice";
import pingSlice from "./pingSlice";

const store = configureStore({
  reducer: {
    session: sessionSlice,
    ping: pingSlice,
  },
});

export default store;
