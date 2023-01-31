import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchRocketsData = createAsyncThunk(
  "rockets/fetchRocketsData",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v4/rockets");
    if (response.status !== 200) return [];
    const { data } = response;
    const results = data.map((rocket) => {
      return {
        rocket_id: rocket.id,
        rocket_name: rocket.name,
        rocket_type: rocket.type,
        rocket_description: rocket.description,
        rocket_images: rocket.flickr_images,
      };
    });
    return results;
  }
);

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.fulfilled, (state, { payload }) => {
      return { ...state, rockets: [...payload] };
    });
  },
});

export default rockets;
