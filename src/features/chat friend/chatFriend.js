import { createSlice } from "@reduxjs/toolkit";

export const friendSlice = createSlice({
  name: "chatFriend",
  initialState: {
    selectedFriend: null,
  },
  reducers: {
    selectFriendToChat: (state, action) => {
      state.selectedFriend = action.payload;
    },
  },
});

export const { selectFriendToChat } = friendSlice.actions;

export default friendSlice.reducer;
