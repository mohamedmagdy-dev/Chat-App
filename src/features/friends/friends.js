import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async ({ email }, thunkApi) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/friends?email=${email}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friends = action.payload;
    });
    builder.addCase(fetchFriends.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default friendsSlice.reducer;
