import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SuperheroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const res = await fetch(`https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/${id}`);
        if (!res.ok) throw new Error('Failed to fetch details');
        const data = await res.json();
        setHero(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchDetails();
  }, [id]);

  if (loading) return <p className="mt-10 font-semibold text-amber-700 text-lg text-center">Loading details...</p>;
  if (error) return <p className="mt-10 font-semibold text-red-600 text-lg text-center">Error: {error}</p>;
  if (!hero) return <p className="mt-10 font-semibold text-gray-800 text-lg text-center">No superhero found.</p>;

  return (
    <>
      <h2 className="mt-12 mb-4 font-extrabold text-gray-900 text-4xl text-center">
        Superhero Profile Details
      </h2>
      <p className="mx-auto mb-10 px-4 sm:px-0 max-w-3xl text-gray-700 text-center">
        Explore comprehensive information about this superhero, including biography, appearance, power stats, connections, and work details.
      </p>

      <div className="bg-white shadow-lg mx-auto my-10 p-6 rounded-lg max-w-5xl container">
        <Link
          to="/"
          className="inline-block mb-6 font-semibold text-amber-700 hover:underline transition"
        >
          ← Back to list
        </Link>

        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex-shrink-0 shadow-lg border border-gray-300 rounded-lg overflow-hidden">
            <img
              src={hero.image?.url || 'https://via.placeholder.com/300'}
              alt={hero.name}
              className="w-72 h-72 object-cover"
            />
          </div>

          <div className="flex-grow">
            <h1 className="mb-4 font-extrabold text-gray-900 text-4xl">{hero.name}</h1>

            <section className="mb-8">
              <h2 className="mb-3 pb-1 border-amber-300 border-b-2 font-semibold text-gray-800 text-2xl">
                Biography
              </h2>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Full Name:</strong> {hero.biography?.['full-name'] || 'Unknown'}</li>
                <li><strong>Alter Egos:</strong> {hero.biography?.['alter-egos'] || 'None'}</li>
                <li><strong>Aliases:</strong> {hero.biography?.aliases?.join(', ') || 'None'}</li>
                <li><strong>Place of Birth:</strong> {hero.biography?.['place-of-birth'] || 'Unknown'}</li>
                <li><strong>First Appearance:</strong> {hero.biography?.['first-appearance'] || 'Unknown'}</li>
                <li><strong>Publisher:</strong> {hero.biography?.publisher || 'Unknown'}</li>
                <li><strong>Alignment:</strong> {hero.biography?.alignment || 'Unknown'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 pb-1 border-amber-300 border-b-2 font-semibold text-gray-800 text-2xl">
                Appearance
              </h2>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Gender:</strong> {hero.appearance?.gender || 'Unknown'}</li>
                <li><strong>Race:</strong> {hero.appearance?.race || 'Unknown'}</li>
                <li><strong>Height:</strong> {hero.appearance?.height?.join(' / ') || 'Unknown'}</li>
                <li><strong>Weight:</strong> {hero.appearance?.weight?.join(' / ') || 'Unknown'}</li>
                <li><strong>Eye Color:</strong> {hero.appearance?.['eye-color'] || 'Unknown'}</li>
                <li><strong>Hair Color:</strong> {hero.appearance?.['hair-color'] || 'Unknown'}</li>
              </ul>
            </section>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-6 font-bold text-gray-900 text-3xl text-center">Power Stats</h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {hero.powerstats && Object.entries(hero.powerstats).map(([stat, value]) => {
              const valNum = Number(value);
              const validValue = isNaN(valNum) ? 0 : valNum;
              return (
                <div key={stat} className="bg-amber-50 shadow-md p-5 border border-amber-200 rounded-lg">
                  <h3 className="mb-2 font-semibold text-amber-700 text-lg capitalize">{stat}</h3>
                  <div className="bg-amber-200 rounded-full w-full h-4 overflow-hidden">
                    <div
                      className="bg-amber-600 rounded-full h-4 transition-width duration-500 ease-in-out"
                      style={{ width: `${validValue}%` }}
                    />
                  </div>
                  <p className="mt-2 font-medium text-amber-900">{validValue}/100</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10 pt-8 border-t">
          <h2 className="mb-4 font-semibold text-gray-800 text-2xl">Connections</h2>
          <p className="mb-1 text-gray-700">
            <strong>Group Affiliation:</strong> {hero.connections?.['group-affiliation'] || 'Unknown'}
          </p>
          <p className="text-gray-700">
            <strong>Relatives:</strong> {hero.connections?.relatives || 'Unknown'}
          </p>
        </section>

        <section className="mt-8 pt-8 border-t">
          <h2 className="mb-4 font-semibold text-gray-800 text-2xl">Work</h2>
          <p className="mb-1 text-gray-700"><strong>Occupation:</strong> {hero.work?.occupation || 'Unknown'}</p>
          <p className="text-gray-700"><strong>Base:</strong> {hero.work?.base || 'Unknown'}</p>
        </section>
      </div>
    </>
  );
}
