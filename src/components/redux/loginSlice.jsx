import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  user: null,
  error: null,
  loginTimestamp: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest(state) {
      state.status = "loading";
    },
    loginSuccess(state, action) {
      state.status = "succeeded";
      state.user = action.payload;
      state.error = null;
      const currentTime = new Date().getTime();
      state.loginTimestamp = currentTime;
      localStorage.setItem("userToken", action.payload.token);
      localStorage.setItem("loginTimestamp", currentTime.toString());
    },
    loginFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    logout(state) {
      state.status = "idle";
      state.user = null;
      state.error = null;
      state.loginTimestamp = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("loginTimestamp");
    },

    checkUserToken(state) {
      const userToken = localStorage.getItem("userToken");
      const storedTimestamp = localStorage.getItem("loginTimestamp");
      if (userToken && storedTimestamp) {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - parseInt(storedTimestamp);
        const fifteenMinutesInMilliseconds = 2 * 60 * 60 * 1000;

        if (timeDifference > fifteenMinutesInMilliseconds) {
          loginSlice.caseReducers.logout(state);
        } else {
          state.status = "succeeded";
          state.user = { token: userToken };
          state.loginTimestamp = parseInt(storedTimestamp);
        }
      }
    },

    updateLoginTimestamp(state) {
      if (state.user) {
        const currentTime = new Date().getTime();
        state.loginTimestamp = currentTime;
        localStorage.setItem("loginTimestamp", currentTime.toString());
      }
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  checkUserToken,
  updateLoginTimestamp,
} = loginSlice.actions;

export default loginSlice.reducer;
