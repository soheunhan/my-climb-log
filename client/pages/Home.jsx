import React from 'react';
import { useSelector } from 'react-redux';
import Sessions from '../features/sessions/Sessions.jsx';

import { useGetSessionQuery } from '../features/workouts/workoutApi.js';
import ButtonLink from '../components/ButtonLink.jsx';

// rendering start workout button and session history
const Home = () => {
  const { data, error, isLoading } = useGetSessionQuery();

  // creating sessions from data fetched from DB
  const sessions = [];
  if (data) {
    const sorted = data.slice().sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(sorted);
    for (let i = 0; i < sorted.length; i++) {
      sessions.push(
        <Sessions
          date={sorted[i].date}
          attempts={sorted[i].attempts}
          sends={sorted[i].sends}
          peak={sorted[i].peak}
          id={sorted[i].date}
          key={sorted[i].date}
        ></Sessions>
      );
    }
  }

  return (
    <div className="main-container">
      <h1>climbsmith</h1>
      <ButtonLink to="/workout/new">Start Climbing!</ButtonLink>
      <div className="session-list">{sessions}</div>
    </div>
  );
};

export default Home;
