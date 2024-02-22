import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to} className="button-container">
      <button className="nav-btn">{children}</button>
    </Link>
  );
};

export default ButtonLink;
