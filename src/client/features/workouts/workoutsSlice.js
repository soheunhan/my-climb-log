import { createSlice } from '@reduxjs/toolkit';
const holds = {
  crimp: false,
  sloper: false,
  jug: false,
  pinch: false,
  pocket: false,
};

const initialState = {
  attempts: 0,
  sends: 0,
  peak: 0,
  level: 0,
  wallType: '',
  crimp: false,
  sloper: false,
  jug: false,
  pinch: false,
  pocket: false,
  sent: false,
};

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    changeLevel(state, action) {
      if (action.payload === '-' && state.level > 0) state.level--;
      else if (action.payload === '+') state.level++;
    },
    setWallType(state, action) {
      state.wallType = action.payload;
    },
    setHolds(state, action) {
      state[action.payload] === false
        ? (state[action.payload] = true)
        : (state[action.payload] = false);
    },
    setSent(state, action) {
      state.attempts++;
      if (action.payload === 'sent') {
        state.sent = true;
        state.sends++;
      }
      if (state.level > state.peak) state.peak = state.level;
    },
    resetWorkout(state) {
      state.level = 0;
      state.wallType = '';
      state.crimp = false;
      state.sloper = false;
      state.jug = false;
      state.pinch = false;
      state.pocket = false;
      state.sent = false;
    },
  },
});

export const { changeLevel, setWallType, setHolds, setSent, resetWorkout } =
  workoutsSlice.actions;

export default workoutsSlice.reducer;
