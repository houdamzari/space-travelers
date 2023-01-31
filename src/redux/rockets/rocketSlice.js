import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
});
