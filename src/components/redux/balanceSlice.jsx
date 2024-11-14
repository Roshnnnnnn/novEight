import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const CURRENT_BAL = `${API_BASE_URL}/get_current_wallet_api.php`;

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    currentBalance: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setBalance: (state, action) => {
      state.currentBalance = action.payload;
      state.status = "succeeded";
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setBalance, setLoading, setError } = balanceSlice.actions;

export const fetchBalance = () => async (dispatch) => {
  const token = localStorage.getItem("userToken");
  dispatch(setLoading());

  const formData = new FormData();
  formData.append("token", token);

  try {
    const response = await axios.post(CURRENT_BAL, formData);
    const data = response.data.data.response;
    dispatch(setBalance(data.current_bal));
  } catch (error) {
    console.error("Error fetching balance:", error);
    dispatch(setError(error.message));
  }
};

export default balanceSlice.reducer;
