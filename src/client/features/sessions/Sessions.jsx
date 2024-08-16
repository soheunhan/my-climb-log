import React from 'react';
import { Link } from 'react-router-dom';

// redering individual sessions in home page
const Sessions = ({ date, attempts, sends, peak, id }) => {
  return (
    <Link to={'/workout/' + date} className="session-container" id={id}>
      <div className="session-date">{date}</div>
      <ul className="session-detail-container">
        <li className="session">
          <p className="stats">{attempts}</p>Attempts
        </li>
        <li className="session">
          <p>{sends}</p>Sends
        </li>
        <li className="session">
          <p>V{peak}</p>Max Level
        </li>
      </ul>
    </Link>
  );
};

export default Sessions;
