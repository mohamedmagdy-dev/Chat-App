import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "Auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await axios.post(
        "https://chat-app-backend-by-ai-production.up.railway.app/api/auth/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: null,
    msg: "",
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload.message;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload.message;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
