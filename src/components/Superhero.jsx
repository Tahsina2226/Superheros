import React, { useEffect, useState } from 'react';
import SuperheroCard from './SuperheroCard';

export default function SuperheroList() {
  const [superheroes, setSuperheroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records')
      .then(res => res.json())
      .then(data => setSuperheroes(data.items || []))
      .catch(() => setSuperheroes([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading superheroes...</p>;

  return (
    <div className="mx-auto px-4 py-8 max-w-6xl">
  
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-bold text-gray-900 text-3xl">
          Meet Your Favorite Superheroes
        </h2>
        <p className="mx-auto max-w-xl text-gray-600">
          Explore detailed profiles of superheroes from various universes. Click on a card to learn more about their powers, stories, and alignments.
        </p>
      </div>


      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {superheroes.map(hero => (
          <SuperheroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
