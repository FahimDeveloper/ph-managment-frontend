import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    loggedOutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loggedInUser, loggedOutUser } = authSlice.actions;
export default authSlice.reducer;
