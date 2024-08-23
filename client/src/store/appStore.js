import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";
import userReducer from "./userSlice";
export const appStore = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    user: userReducer, // Add your other reducers here.  e.g., user: userReducer,
  },
});
