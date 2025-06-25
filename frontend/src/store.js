import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./store/eventSlice";
import { authSlice } from "./store/authSlice";
import { errorSlice, languageSlice, loadSlice } from "./store/mainSlice";

const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
    user: authSlice.reducer,
    error: errorSlice.reducer,
    isLoading: loadSlice.reducer,
    language: languageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
