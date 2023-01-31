import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';

const store = configureStore({
  reducer: {
    missions: missions.reducer,
  },
});

export default store;
