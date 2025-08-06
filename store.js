import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/features/auth/authSlicer";
import friendsReducer from "./src/features/friends/friends";
import friendReducer from "./src/features/chat friend/chatFriend";
export const store = configureStore({
  reducer: {
    Auth: authReducer,
    friends: friendsReducer,
    chatFriend: friendReducer,
  },
});
