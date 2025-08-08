import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuperheroCard({ hero }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/hero/${hero.id}`)}
      className="flex flex-col items-center bg-white shadow-md hover:shadow-xl p-5 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/hero/${hero.id}`); }}
      aria-label={`View details for ${hero.name}`}
    >
      <div className="flex justify-center items-center bg-gray-100 border border-gray-300 rounded w-96 aspect-[4/3] overflow-hidden">
        <img
          src={hero.image?.url || 'https://via.placeholder.com/288x216?text=No+Image'}
          alt={hero.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <h2
        className="mt-4 w-full font-semibold text-gray-900 text-xl text-center truncate"
        title={hero.name}
      >
        {hero.name}
      </h2>
      <p
        className="mt-1 w-full text-gray-600 text-sm text-center truncate"
        title={hero.biography?.['full-name'] || 'No full name'}
      >
        {hero.biography?.['full-name'] || 'No full name'}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-3 w-full">
        {hero.biography?.alignment && (
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full select-none ${
              hero.biography.alignment === 'good'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
            title={`Alignment: ${hero.biography.alignment}`}
          >
            {hero.biography.alignment.charAt(0).toUpperCase() + hero.biography.alignment.slice(1)}
          </span>
        )}

        {hero.biography?.publisher && (
          <span
            className="bg-amber-100 px-3 py-1 rounded-full max-w-xs font-semibold text-amber-800 text-xs truncate select-none"
            title={hero.biography.publisher}
          >
            {hero.biography.publisher}
          </span>
        )}
      </div>
    </div>
  );
}
