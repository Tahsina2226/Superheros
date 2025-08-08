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
      <div className="mb-10 text-center">
        <h2 className="mb-3 font-extrabold text-gray-900 text-5xl tracking-tight">
          Meet Your Favorite Superheroes
        </h2>
        <p className="mx-auto max-w-xl text-gray-600 text-lg leading-relaxed">
          Explore detailed profiles of superheroes from various universes.
        </p>
        {totalCount !== null && (
          <p className="mt-3 text-gray-500 text-sm">
            Total superheroes found:{' '}
            <span className="font-semibold" style={{ color: '#A17C69' }}>
              {totalCount}
            </span>
          </p>
        )}
      </div>

      <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 mb-12">
        <input
          type="text"
          placeholder="Search superheroes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="shadow-sm px-5 py-3 border rounded-md focus:outline-none focus:ring-2 w-full sm:w-1/2 text-gray-700 transition placeholder-gray-500"
          style={{
            backgroundColor: '#fcfbf9',
            borderColor: '#E3CFC3',
            color: '#A17C69',
            boxShadow: '0 0 0 2px transparent',
          }}
          onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #A17C69')}
          onBlur={e => (e.target.style.boxShadow = '0 0 0 2px transparent')}
        />
        <div className="flex gap-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="shadow-sm px-5 py-3 border rounded-md focus:outline-none focus:ring-2 text-gray-700 transition"
            style={{
              backgroundColor: 'white',
              borderColor: '#E3CFC3',
              color: '#A17C69',
              boxShadow: '0 0 0 2px transparent',
            }}
            onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #A17C69')}
            onBlur={e => (e.target.style.boxShadow = '0 0 0 2px transparent')}
          >
            <option value="name">Sort: Name (A-Z)</option>
            <option value="-name">Sort: Name (Z-A)</option>
          </select>
          <select
            value={matchType}
            onChange={(e) => setMatchType(e.target.value)}
            className="shadow-sm px-5 py-3 border rounded-md focus:outline-none focus:ring-2 text-gray-700 transition"
            style={{
              backgroundColor: 'white',
              borderColor: '#E3CFC3',
              color: '#A17C69',
              boxShadow: '0 0 0 2px transparent',
            }}
            onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #A17C69')}
            onBlur={e => (e.target.style.boxShadow = '0 0 0 2px transparent')}
          >
            <option value="partial">Partial Match</option>
            <option value="exact">Exact Match</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p
          className="font-semibold text-lg text-center animate-pulse"
          style={{ color: '#A17C69' }}
        >
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

      <div className="flex justify-center items-center gap-6 mt-16">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-5 py-2 rounded-md text-sm font-semibold text-white shadow-md transition`}
          style={{
            backgroundColor: page === 1 ? '#D3D3D3' : '#A17C69',
            cursor: page === 1 ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={e => {
            if (page !== 1) e.currentTarget.style.backgroundColor = '#8E6A59';
          }}
          onMouseLeave={e => {
            if (page !== 1) e.currentTarget.style.backgroundColor = '#A17C69';
          }}
        >
          Previous
        </button>
        <span className="font-semibold text-gray-700 text-lg select-none">
          Page <span style={{ color: '#A17C69' }}>{page}</span> / <span>{totalPages}</span>
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-5 py-2 rounded-md text-sm font-semibold text-white shadow-md transition`}
          style={{
            backgroundColor: page === totalPages ? '#D3D3D3' : '#A17C69',
            cursor: page === totalPages ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={e => {
            if (page !== totalPages) e.currentTarget.style.backgroundColor = '#8E6A59';
          }}
          onMouseLeave={e => {
            if (page !== totalPages) e.currentTarget.style.backgroundColor = '#A17C69';
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
