import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
  }
})
export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;