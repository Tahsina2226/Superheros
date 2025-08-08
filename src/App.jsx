import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SuperheroList from './components/Superhero';
import SuperheroDetails from './pages/SuperheroDetails';

function App() {
  return (
    <div className="mx-auto p-4 container">
      <Routes>
        <Route path="/" element={<SuperheroList />} />
        <Route path="/hero/:id" element={<SuperheroDetails />} />
      </Routes>
    </div>
  );
}

export default App;
