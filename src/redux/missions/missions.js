import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMishions = createAsyncThunk(
  'missions/fetch-missions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    if (response.status !== 200) return [];
    const data = response.data.map((mission) => {
      return {
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      };
    });

    return data;
  }
);

const initialState = {
  missions: [],
};

const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMishions.fulfilled, (state, { payload }) => {
      return { ...state, missions: [...payload] };
    });
  },
});

export default missions;
