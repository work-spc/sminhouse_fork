import { configureStore } from "@reduxjs/toolkit";

import modalWindowSliceReducer from "./chosen-сomponents/is-open-modal-window";
import chatModalSliceReducer from "./chat-modal-slice/chat-modal-slice";

export const store = configureStore({
  reducer: {
    modalWindow: modalWindowSliceReducer,
    ChatModal: chatModalSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
