import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  loggedin: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedin = true;
    },
    logout(state) {
      state.loggedin = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
