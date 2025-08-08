import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';   
import Footer from './components/Footer';   
import Home from './pages/Home';              
import SuperheroDetails from './pages/SuperheroDetails';
import ErrorPage from './pages/ErrorPage'; 

function App() {
  return (
    <div className="flex flex-col p-4 min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero/:id" element={<SuperheroDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
