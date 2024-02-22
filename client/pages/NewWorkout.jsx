import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeLevel,
  setWallType,
  setHolds,
  setSent,
  resetWorkout,
} from '../features/workouts/workoutsSlice.js';
import {
  useGetSessionQuery,
  useUpdateSessionMutation,
  useAddWorkoutMutation,
} from '../features/workouts/workoutApi.js';
import Sessions from '../features/sessions/Sessions.jsx';

const NewWorkout = () => {
  const {
    attempts,
    sends,
    peak,
    level,
    wallType,
    crimp,
    sloper,
    jug,
    pinch,
    pocket,
    sent,
  } = useSelector((state) => state.workouts);

  const { data, error, isLoading } = useGetSessionQuery();

  const currSession = {};

  if (data) {
    console.log('fetch successful', data);
    const today = new Date().toISOString().slice(0, 10);
    for (let i = 0; i < data.length; i++) {
      if (data[i].date === today) {
        currSession.date = data[i].date;
        currSession.attempts = data[i].attempts;
        currSession.sends = data[i].sends;
        currSession.peak = data[i].peak;
      }
    }
  }
  console.log(currSession);

  const dispatch = useDispatch();
  const [addWorkout] = useAddWorkoutMutation();
  const [updateSession] = useUpdateSessionMutation();

  const handleSubmit = (e) => {
    dispatch(setSent(e.target.name));
    const date = new Date().toISOString().slice(0, 10);
    addWorkout({
      level,
      wallType,
      crimp,
      sloper,
      jug,
      pinch,
      pocket,
      sent,
    })
      .then((workout) => {
        console.log('workout from addWorkout: ', workout);
        if (e.target.name === 'reset') dispatch(resetWorkout());
      })
      .catch((err) => console.log(err));

    currSession.peak < level ? (currSession.peak = level) : currSession.peak;
    currSession.attempts++;
    e.target.name === 'sent' ? currSession.sends++ : currSession.sends;

    // console.log(attempts, sends, peak);
    updateSession(currSession).then((session) => {
      console.log('session updated: ', session);
    });
  };

  const setClassNameActive = (e) => {
    e.target.className === 'types-btn'
      ? (e.target.className = 'types-btn active')
      : e.target.className === 'types-btn active'
      ? e.target.className === 'types-btn'
      : target.className;
  };

  return (
    <div className="main-container">
      <h1>New Workout</h1>
      <h2>Current Session</h2>
      <Sessions
        date={currSession.date}
        attempts={currSession.attempts}
        sends={currSession.sends}
        peak={currSession.peak}
        id={currSession.date}
      />
      <div className="new-workout-container">
        <div className="workout-options-btns-container level-container">
          <button
            className="level-btn"
            onClick={() => dispatch(changeLevel('-'))}
          >
            -
          </button>
          <p id="level-text">V{level}</p>
          <button
            className="level-btn"
            onClick={() => dispatch(changeLevel('+'))}
          >
            +
          </button>
        </div>
        <div className="workout-options-container">
          <p>Wall Type</p>
          <div className="workout-options-btns-container">
            <button
              className="types-btn"
              onClick={(e) => {
                dispatch(setWallType('vertical'));
                setClassNameActive(e);
              }}
            >
              Vertical
            </button>
            <button
              className="types-btn"
              onClick={(e) => {
                dispatch(setWallType('overhang'));
                setClassNameActive(e);
              }}
            >
              Overhang
            </button>
            <button
              className="types-btn"
              onClick={(e) => {
                dispatch(setWallType('slab'));
                setClassNameActive(e);
              }}
            >
              Slab
            </button>
          </div>
        </div>
        <div className="workout-options-container">
          <p>Crux Holds</p>
          <div className="workout-options-btns-container">
            <button
              className="types-btn"
              onClick={(e) => dispatch(setHolds('crimp'))}
            >
              Crimp
            </button>
            <button
              className="types-btn"
              onClick={(e) => dispatch(setHolds('sloper'))}
            >
              Sloper
            </button>
            <button
              className="types-btn"
              onClick={(e) => dispatch(setHolds('jug'))}
            >
              Jug
            </button>
            <button
              className="types-btn"
              onClick={(e) => dispatch(setHolds('pinch'))}
            >
              Pinch
            </button>
            <button
              className="types-btn"
              onClick={(e) => dispatch(setHolds('pocket'))}
            >
              Pocket
            </button>
          </div>
        </div>
        <div className="workout-options-btns-container send-workout-btns">
          <button
            className="nav-btn"
            id="attempted-btn"
            name="attempted"
            onClick={handleSubmit}
          >
            Attempted
          </button>
          <button
            className="nav-btn"
            id="sent-btn"
            name="sent"
            onClick={handleSubmit}
          >
            Sent
          </button>
        </div>
        <div>
          <button id="reset-btn" name="reset" onClick={handleSubmit}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewWorkout;
