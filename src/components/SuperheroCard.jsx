import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuperheroCard({ hero }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/hero/${hero.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/hero/${hero.id}`); }}
      aria-label={`View details for ${hero.name}`}
      className="grid grid-rows-[auto_auto_auto] bg-white shadow-md hover:shadow-xl p-5 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <div className="flex justify-center items-center bg-gray-100 border border-gray-300 rounded aspect-[4/3] overflow-hidden">
        <img
          src={hero.image?.url || 'https://via.placeholder.com/288x216?text=No+Image'}
          alt={hero.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-4 text-center">
        <h2
          className="font-semibold text-gray-900 text-xl truncate"
          title={hero.name}
        >
          {hero.name}
        </h2>
        <p
          className="mt-1 text-gray-600 text-sm truncate"
          title={hero.biography?.['full-name'] || 'No full name'}
        >
          {hero.biography?.['full-name'] || 'No full name'}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-3">
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
            className="px-3 py-1 rounded-full font-semibold text-xs truncate select-none"
            style={{ backgroundColor: '#F7E7DC', color: '#A17C69' }}
            title={hero.biography.publisher}
          >
            {hero.biography.publisher}
          </span>
        )}
      </div>
    </div>
  );
}
