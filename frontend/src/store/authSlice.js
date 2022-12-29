import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    setUser(state, action) {
      return action.payload;
    },
    signUp(state, action) {
      return action.payload;
    },
    logout: () => null,
  },
});

export const { login, signUp, logout, setUser } = authSlice.actions;
