import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameDetails from './components/GameDetails';
import Home from './components/Home';
import Landing from './components/Landing';
import mostPlayed from '../data/mostPlayed';

const App = () => {
  return (
    <>
      <div className="root-component">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            {/* {mostPlayed.map((game) => ( */}
              <Route path="/game/:id" element={<GameDetails />} />
            {/* ))} */}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
