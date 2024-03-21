import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModalWindow: false,
};

const modalWindowSlice = createSlice({
  name: "isOpenModalWindow",
  initialState,
  reducers: {
    openModalWindow: (state) => {
      state.isOpenModalWindow = true;
    },
    closeModalWindow: (state) => {
      state.isOpenModalWindow = false;
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
