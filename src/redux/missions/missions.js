import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});
