import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    calling: false,
    phoneNumber: [456456456],
  },
  reducers: {
    addDigit: (state, action) => ({
      ...state,
      phoneNumber: [...state.phoneNumber, action.payload],
    }),
  },
});

export default phoneSlice.reducer;

export const { addDigit: addDigitActionCreator } = phoneSlice.actions;
