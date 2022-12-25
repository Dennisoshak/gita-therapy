import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: { isLoading: false, error: "" },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const { setIsLoading, setError } = mainSlice.actions;
