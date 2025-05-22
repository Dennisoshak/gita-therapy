import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {
    setAllEvents(state, action) {
      return action.payload ?? [];
    },
  },
});

export const { setAllEvents } = eventSlice.actions;
