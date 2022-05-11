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
      phoneNumber:
        state.phoneNumber.length < 9
          ? [...state.phoneNumber, action.payload]
          : [...state.phoneNumber],
    }),
    removeLastDigit: (state) => ({
      ...state,
      phoneNumber: [...state.phoneNumber.slice(0, -1)],
    }),
  },
});

export const phoneReducer = phoneSlice.reducer;

export const {
  addDigit: addDigitActionCreator,
  removeLastDigit: removeLastDigitActionCreator,
} = phoneSlice.actions;
