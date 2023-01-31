import { configureStore } from "@reduxjs/toolkit";
import missions from "./missions/missions";
import rockets from "./rockets/rocketSlice";
const store = configureStore({
  reducer: {
    missions: missions.reducer,
    rockets: rockets.reducer,
  },
});

export default store;
