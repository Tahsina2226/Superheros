import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuperheroList from '../components/Superhero';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="pt-16"> 
      <Navbar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <SuperheroList />
      <Footer />
    </div>
  );
}
