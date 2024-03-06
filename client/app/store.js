import { configureStore } from '@reduxjs/toolkit';

import workoutsReducer from '../features/workouts/workoutsSlice.js';
import { workoutApiSlice } from '../features/workouts/workoutApi.js';

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    workoutApi: workoutApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutApiSlice.middleware),
});

export default store;
