import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    setuser(state, action) {
      return action.payload;
    },

    removeUser(state, action) {
      return "";
    },
  },
});

export const { setuser, removeUser } = userSlice.actions;
export default userSlice.reducer;
