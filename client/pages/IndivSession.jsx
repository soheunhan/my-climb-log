import React from 'react';
import { useParams } from 'react-router-dom';
import Workouts from '../features/workouts/Workouts.jsx';
import { useGetWorkoutQuery } from '../features/workouts/workoutApi.js';

const IndivSession = () => {
  const { data, error, isLoading } = useGetWorkoutQuery();

  const currSession = [];
  const params = useParams();

  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].date.slice(0, 10) === params.sessionId) {
        currSession.push(
          <Workouts
            level={data[i].level}
            wallType={data[i].wallType}
            crimp={data[i].crimp}
            sloper={data[i].sloper}
            jug={data[i].jug}
            pinch={data[i].pinch}
            sent={data[i].sent}
            sessionId={params.sessionId}
            key={params.sessionId + i}
          ></Workouts>
        );
      }
    }
  }
  //   console.log(params.sessionId);

  return (
    <div className="main-container">
      <h2>{params.sessionId}</h2>
      <p>progression graph here</p>
      {currSession}
    </div>
  );
};

export default IndivSession;
