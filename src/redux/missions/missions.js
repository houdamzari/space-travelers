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
        reserved: false,
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
  reducers: {
    joinMission(state, { payload }) {
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });

      return { missions: [...newMissions] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMishions.fulfilled, (state, { payload }) => {
      return { ...state, missions: [...payload] };
    });
  },
});

export const missionsActions = missions.actions;

export default missions;
