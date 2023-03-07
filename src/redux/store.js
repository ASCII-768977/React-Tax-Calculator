import selectionReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    selections: selectionReducer,
  },
});

export default store;
