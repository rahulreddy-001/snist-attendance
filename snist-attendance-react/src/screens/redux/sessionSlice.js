import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./config";

const initialState = {
  loading: false,
  data: JSON.parse(localStorage.getItem("sessionData")) || null,
  error: "",
};

const login = createAsyncThunk(
  "sessionData/login",
  async ({ user, password }) => {
    const response = await fetch(url.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password,
        type: "student",
      }),
    });
    const data = await response.json();

    data.user = user;
    data.password = password;
    data.time = new Date().toLocaleString();

    if (data.success) localStorage.setItem("sessionData", JSON.stringify(data));
    return data;
  }
);

const refresh = createAsyncThunk("sessionData/refresh", async () => {
  let user = initialState["data"]["user"];
  let password = initialState["data"]["password"];

  const response = await fetch(url.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      password,
      type: "student",
    }),
  });
  const data = await response.json();

  data.user = user;
  data.password = password;
  data.time = new Date().toLocaleString();

  if (data.success) localStorage.setItem("sessionData", JSON.stringify(data));
  return data;
});

const sessionSlice = createSlice({
  name: "sessionData",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.error = "";
      localStorage.removeItem("sessionData");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(refresh.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(refresh.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { login, refresh };
export const { logout } = sessionSlice.actions;
export default sessionSlice.reducer;
