import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import countryReducer from "../countrySlice";
import loginReducer from "../loginSlice";
import balanceReducer from "../balanceSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    country: countryReducer,
    balance: balanceReducer,
  },
});
