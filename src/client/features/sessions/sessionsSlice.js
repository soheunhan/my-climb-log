// import { useGetSessionQuery } from '../workouts/workoutApi';
// import { createSlice } from '@reduxjs/toolkit';

// const { data, error, isLoading } = useGetSessionQuery();

// const initialState = {};

// if (!isLoading) {
//   const today = new Date().toISOString().slice(0, 10);
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].date === today) initialState = { date, attempts, sends, peak };
//   }
// }

// const sessionsSlice = createSlice({
//   name: 'sessions',
//   initialState,
//   reducers: {
//     updateSessionState(state, action) {
//       state.attempts++;
//       action.payload.level > state.peak
//         ? (state.peak = action.payload.level)
//         : state.peak;
//       action.payload.sent === 'sent' ? state.sends++ : state.sends;
//     },
//   },
// });

// export const { updateSessionState } = sessionsSlice.actions;

// export default sessionsSlice.reducer;
