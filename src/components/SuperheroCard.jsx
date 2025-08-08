import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuperheroCard({ hero }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/hero/${hero.id}`)}
      className="flex flex-col items-center bg-white shadow-md hover:shadow-xl p-4 rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer transform"
    >
      <div className="flex justify-center items-center bg-gray-100 border-2 border-gray-300 rounded w-96 aspect-[4/3] overflow-hidden">
        <img
          src={hero.image?.url || 'https://via.placeholder.com/288x216?text=No+Image'}
          alt={hero.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <h2 className="mt-4 w-full font-bold text-gray-800 text-xl text-center truncate">{hero.name}</h2>
      <p className="mt-1 w-full text-gray-500 text-sm text-center truncate">
        {hero.biography?.['full-name'] || 'No full name'}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-3 w-full">
        {hero.biography?.alignment && (
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              hero.biography.alignment === 'good'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {hero.biography.alignment.charAt(0).toUpperCase() + hero.biography.alignment.slice(1)}
          </span>
        )}

        {hero.biography?.publisher && (
          <span className="bg-blue-100 px-2 py-1 rounded-full max-w-xs font-semibold text-blue-800 text-xs truncate">
            {hero.biography.publisher}
          </span>
        )}
      </div>
    </div>
  );
}
