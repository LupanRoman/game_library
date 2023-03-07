import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';

const App = () => {
  return (
    <>
      <div className="root-component">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
