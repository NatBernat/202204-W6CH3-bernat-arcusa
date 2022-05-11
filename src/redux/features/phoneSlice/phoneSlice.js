import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    calling: false,
    phoneNumber: [],
  },
  reducers: {
    addDigit: (state, action) => ({
      ...state,
      phoneNumber: [...state.phoneNumber, action.payload],
    }),
    removeLastDigit: (state) => ({
      ...state,
      phoneNumber: [...state.phoneNumber.slice(0, -1)],
    }),
  },
});

export default phoneSlice.reducer;

export const {
  addDigit: addDigitActionCreator,
  removeLastDigit: removeLastDigitActionCreator,
} = phoneSlice.actions;
