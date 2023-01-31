import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchRocketsData = createAsyncThunk(
  "rockets/fetchRocketsData",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v4/rockets");

    const { data } = response;
    data.map((rocket) => {
      return {
        id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        rocket_type: rocket.rocket_type,
        rocket_description: rocket.rocket_description,
        rocket_images: rocket.flickr_images,
      };
    });
    return data;
  }
);

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRocketsData.pending]: (state) => {
      state.loading = true;
    },
    [fetchRocketsData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchRocketsData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default rockets;
