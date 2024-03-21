import { configureStore } from "@reduxjs/toolkit";

import isOpenModalWindowReducer from "./chosen-сomponents/is-open-modal-window";

export const store = configureStore({
  reducer: {
    modalWindow: isOpenModalWindowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
