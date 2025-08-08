import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';              
import SuperheroDetails from './pages/SuperheroDetails';

function App() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<SuperheroDetails />} />
      </Routes>
    </div>
  );
}

export default App;
