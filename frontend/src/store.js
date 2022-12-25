import { configureStore } from "@reduxjs/toolkit";
import { workoutSlice } from "./store/workoutSlice";
import { authSlice } from "./store/authSlice";
import { mainSlice } from "./store/mainSlice";

const store = configureStore({
  reducer: {
    workouts: workoutSlice.reducer,
    user: authSlice.reducer,
    main: mainSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
