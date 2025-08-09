import { createSlice } from "@reduxjs/toolkit";

export const chatBoxSlice = createSlice({
  name: "chatBox",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openChatBox: (state) => {
      state.isOpened = true;
    },
    closeChatBox: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openChatBox, closeChatBox } = chatBoxSlice.actions;

export default chatBoxSlice.reducer;
