import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchSuccess: (state, action) => {
      state.loading = false;
      state.restaurants = action.payload;
    },

    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;

/* ===========================
   Redux Thunk Action
=========================== */

export const fetchRestaurants = (city = "") => {
  return async (dispatch) => {
    dispatch(fetchStart());

    console.log("Fetching restaurants...");

    try {
      const response = await fetch(
        "https://restaurant-api.dicoding.dev/list"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const data = await response.json();

      console.log("Fetched Data:", data);

      let filtered = data.restaurants;

      if (city.trim() !== "") {
        filtered = data?.restaurants?.filter((restaurant) =>
          restaurant.city
            ?.toLowerCase()
            .includes(city.toLowerCase())
        );
      }

      dispatch(fetchSuccess(filtered));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};