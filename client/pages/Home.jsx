import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sessions from '../features/sessions/Sessions.jsx';

import { useGetSessionQuery } from '../features/workouts/workoutApi.js';
import ButtonLink from '../components/ButtonLink.jsx';

const Home = () => {
  const { data, error, isLoading } = useGetSessionQuery();

  // const currSession = {};

  // if (data) {
  //   const today = new Date().toISOString().slice(0, 10);
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].date === today) {
  //       currSession.date = data[i].date;
  //       currSession.attempts = data[i].attempts;
  //       currSession.sends = data[i].sends;
  //       currSession.peak = data[i].peak;
  //     }
  //   }
  // }
  // console.log('fetch successful', data);
  // console.log(currSession);

  const sessions = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      sessions.push(
        <Sessions
          date={data[i].date}
          attempts={data[i].attempts}
          sends={data[i].sends}
          peak={data[i].peak}
          id={data[i].date}
          key={data[i].date}
        ></Sessions>
      );
    }
  }

  return (
    <div className="main-container">
      <h1>ClimbSmith</h1>
      <ButtonLink to="/workout/new">Start Climbing!</ButtonLink>
      <div className="session-list">{sessions}</div>
    </div>
  );
};

export default Home;
