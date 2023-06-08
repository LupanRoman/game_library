import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameDetails from './components/GameDetails/GameDetails';
import Home from './components/Home';
import Landing from './components/Landing';
import PersSpace from './components/PersSpace';
import Genre from './Genre';

const App = () => {
  return (
    <>
      <div className="root-component">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game/:slug" element={<GameDetails />} />
            <Route path="/personal" element={<PersSpace />} />
            <Route path="/genre/:id" element={<Genre />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
