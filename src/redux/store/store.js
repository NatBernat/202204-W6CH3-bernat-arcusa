import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "../features/phoneSlice/phoneSlice";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});
