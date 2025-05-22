import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload ?? null;
    },
    setUser(state, action) {
      return action.payload ?? null;
    },
    signUp(state, action) {
      return action.payload ?? null;
    },
    logout: () => null,
  },
});

export const { login, signUp, logout, setUser } = authSlice.actions;
