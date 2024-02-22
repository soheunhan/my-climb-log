import React from 'react';

const Workouts = ({
  level,
  wallType,
  crimp,
  sloper,
  jug,
  pinch,
  pocket,
  sent,
  sessionId,
}) => {
  return (
    <div className="workout-detail-container">
      <div>
        <h2>Level</h2>
        <p>V{level}</p>
      </div>
      <div>
        <h2>Wall Type</h2>
        <p>{wallType}</p>
      </div>
      <div>
        <h2>Holds</h2>
        {crimp ? <p>crimp</p> : <></>}
        {sloper ? <p>Sloper</p> : <></>}
        {jug ? <p>Jug</p> : <></>}
        {pinch ? <p>Pinch</p> : <></>}
        {pocket ? <p>Pocket</p> : <></>}
      </div>
      <div>{sent ? <h2>SENT</h2> : <></>}</div>
    </div>
  );
};

export default Workouts;
