import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  selectedCountry: null,
  status: "idle",
  error: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
    setLoading(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const fetchCountryCodes = () => async (dispatch) => {
  dispatch(setLoading("loading"));
  try {
    const API_BASE_URL = "https://api.novotrend.co/api";
    const response = await axios.get(`${API_BASE_URL}/get_country.php`);

    // console.log("Fetched country data:", response.data);

    const countries = response.data.data.map((item) => ({
      countryId: item.country_id,
      countryName: item.country_name,
      countryCode: item.country_code,
    }));
    dispatch(setCountries(countries));
    dispatch(setLoading("succeeded"));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading("failed"));
  }
};

export const { setCountries, setSelectedCountry, setLoading, setError } =
  countrySlice.actions;
export default countrySlice.reducer;
