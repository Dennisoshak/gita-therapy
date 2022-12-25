import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: [],
  reducers: {
    setAllWorkouts(state, action) {
      return action.payload;
    },
  },
});

export const { setAllWorkouts } = workoutSlice.actions;
