import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importing components
import Home from '../pages/Home.jsx';
import NewWorkout from '../pages/NewWorkout.jsx';
import IndivSession from '../pages/IndivSession.jsx';

//setting up react routers
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
