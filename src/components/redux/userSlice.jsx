import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userToken: null,
  userInfo: {
    name: "",
    email: "",
    number: "",
    dob: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    updateUserInfo(state, action) {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    resetUser(state) {
      state.userId = null;
      state.userToken = null;
      state.userInfo = {
        name: "",
        email: "",
        number: "",
        dob: "",
      };
    },
  },
});

export const {
  setUserId,
  setUserToken,
  setUserInfo,
  updateUserInfo,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
