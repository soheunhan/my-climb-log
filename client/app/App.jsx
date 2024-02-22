import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import NewWorkout from '../pages/NewWorkout.jsx';
import IndivSession from '../pages/IndivSession.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/workout/new" element={<NewWorkout />} />
        <Route path="/workout/:sessionId" element={<IndivSession />} />
      </Routes>
    </Router>
  );
};

export default App;
