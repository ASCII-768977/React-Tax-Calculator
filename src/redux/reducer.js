import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "Australia",
  year: "2020 - 2021",
  amount: 0,
};

export const selectionSlice = createSlice({
  name: "selections",
  initialState: initialState,
  reducers: {
    storeSelections: (state, action) => {
      state.country = action.payload.country;
      state.year = action.payload.year;
      state.amount = action.payload.amount;
    },
  },
});

export const { storeSelections } = selectionSlice.actions;

export default selectionSlice.reducer;
