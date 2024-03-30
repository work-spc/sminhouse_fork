import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenChat: false,
};

const ChatModalWindowSlice = createSlice({
  name: "isOpenModalWindow",
  initialState,
  reducers: {
    openChat: (state) => {
      state.isOpenChat = true;
    },
    closeChat: (state) => {
      state.isOpenChat = false;
    },
  },
});

export const { openChat, closeChat } = ChatModalWindowSlice.actions;
export default ChatModalWindowSlice.reducer;
