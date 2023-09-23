import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./config";

const initialState = {
  loading: true,
  data: {
    success: false,
  },
  error: "",
};

const ping = createAsyncThunk("status/ping", async () => {
  const response = await fetch(url.ping);
  const data = await response.json();
  return data;
});

const pingSlice = createSlice({
  name: "sessionData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ping.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(ping.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(ping.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { ping };
export default pingSlice.reducer;
