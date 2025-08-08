import React, { useEffect, useState } from 'react';
import SuperheroCard from './SuperheroCard';

export default function SuperheroList() {
  const [superheroes, setSuperheroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('name');
  const [matchType, setMatchType] = useState('partial');

  const [totalCount, setTotalCount] = useState(null);

  const totalPages = totalCount ? Math.ceil(totalCount / perPage) : 1;

  const fetchHeroes = () => {
    setLoading(true);
    const encodedSearch = encodeURIComponent(search.trim());
    let query = `?page=${page}&perPage=${perPage}&sort=${sortOrder}`;

    if (encodedSearch !== '') {
      const operator = matchType === 'exact' ? '=' : '~';
      query += `&filter=name${operator}'${encodedSearch}'`;
    }

    fetch(`https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records${query}`)
      .then(res => res.json())
      .then(data => {
        setSuperheroes(data.items || []);
        setTotalCount(data.totalItems || null);
      })
      .catch(() => {
        setSuperheroes([]);
        setTotalCount(null);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchHeroes();
  }, [page, search, sortOrder, matchType]);

  useEffect(() => {
    setPage(1);
  }, [search, sortOrder, matchType]);

  return (
    <div className="bg-white shadow-lg mx-auto px-6 py-14 rounded-lg max-w-7xl">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-5 mb-12">
        <input
          type="text"
          placeholder="Search superheroes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="shadow-sm px-5 py-3 border border-gray-300 focus:border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-1/2 text-gray-700 transition placeholder-gray-500"
          style={{ backgroundColor: '#fcfbf9' }}
        />

        <div className="flex gap-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-white shadow-sm px-5 py-3 border border-gray-300 focus:border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700 transition"
          >
            <option value="name">Sort: Name (A-Z)</option>
            <option value="-name">Sort: Name (Z-A)</option>
          </select>

          <select
            value={matchType}
            onChange={(e) => setMatchType(e.target.value)}
            className="bg-white shadow-sm px-5 py-3 border border-gray-300 focus:border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700 transition"
          >
            <option value="partial">Partial Match</option>
            <option value="exact">Exact Match</option>
          </select>
        </div>
      </div>

      <div className="mb-14 text-center">
        <h2 className="mb-3 font-extrabold text-gray-900 text-5xl tracking-tight">
          Meet Your Favorite Superheroes
        </h2>
        <p className="mx-auto max-w-xl text-gray-600 text-lg leading-relaxed">
          Explore detailed profiles of superheroes from various universes.
        </p>
        {totalCount !== null && (
          <p className="mt-3 text-gray-500 text-sm">
            Total superheroes found: <span className="font-semibold">{totalCount}</span>
          </p>
        )}
      </div>

      {loading ? (
        <p className="font-semibold text-amber-600 text-lg text-center animate-pulse">
          Loading superheroes...
        </p>
      ) : (
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {superheroes.length > 0 ? (
            superheroes.map(hero => (
              <SuperheroCard key={hero.id} hero={hero} />
            ))
          ) : (
            <p className="col-span-full text-gray-400 text-lg text-center italic select-none">
              No superheroes found.
            </p>
          )}
        </div>
      )}

      <div className="flex justify-center items-center gap-8 mt-16">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-8 py-3 rounded-md font-semibold text-white shadow-md transition
            ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700'}`}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700 text-xl select-none">
          Page <span className="text-amber-600">{page}</span> / <span>{totalPages}</span>
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-8 py-3 rounded-md font-semibold text-white shadow-md transition
            ${page === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
