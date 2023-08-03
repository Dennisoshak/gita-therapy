import { createSlice } from "@reduxjs/toolkit";

// export const mainSlice = createSlice({
//   name: "main",
//   initialState: { isLoading: false, error: "" },
//   reducers: {
//     setIsLoading(state, action) {
//       return action.payload
//     },
//     setError(state, action) {
//    console.log(state)

//    return action.payload
//     },
//   },
// });

export const errorSlice = createSlice({
  name: "error",
  initialState: '',
  reducers: {
    setError(state, action) {
      console.log(action.payload)
      return action.payload
    },
  }
})
export const loadSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading(state, action) {
      return action.payload
    },
  }
})
export const languageSlice = createSlice({
  name: "language",
  initialState: {lng:"eng",
  direction:"ltr"
},
  reducers: {
    setLanguage(state, action) {
      return action.payload
    },
  }
})


export const {setError } = errorSlice.actions;
export const {setIsLoading } = loadSlice.actions;
export const {setLanguage } = languageSlice.actions;


