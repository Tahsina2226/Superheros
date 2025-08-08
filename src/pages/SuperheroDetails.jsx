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
        const res = await fetch(
          `https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/${id}`
        );
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

  if (loading)
    return (
      <p className="mt-10 font-semibold text-amber-700 text-lg text-center">
        Loading details...
      </p>
    );
  if (error)
    return (
      <p className="mt-10 font-semibold text-red-600 text-lg text-center">
        Error: {error}
      </p>
    );
  if (!hero)
    return (
      <p className="mt-10 font-semibold text-gray-800 text-lg text-center">
        No superhero found.
      </p>
    );

  return (
    <div
      className="flex justify-center px-4 py-12 min-h-screen"
      style={{ backgroundColor: '#F5ECE0', color: '#6B6259' }}
    >
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-5xl">
        <h2
          className="mb-4 font-extrabold text-4xl text-center"
          style={{ color: '#6B6259' }}
        >
          Superhero Profile Details
        </h2>
        <p
          className="mx-auto mb-10 max-w-3xl text-center"
          style={{ color: '#6B6259' }}
        >
          Explore comprehensive information about this superhero, including biography, appearance, power stats, connections, and work details.
        </p>

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

          <div className="flex flex-col flex-grow gap-8">
            <h1 className="font-extrabold text-4xl" style={{ color: '#6B6259' }}>
              {hero.name}
            </h1>

            <section>
              <h2
                className="mb-3 pb-1 border-amber-300 border-b-2 font-semibold text-2xl"
                style={{ color: '#6B6259' }}
              >
                Biography
              </h2>
              <ul className="space-y-1" style={{ color: '#6B6259' }}>
                <li><strong>Full Name:</strong> {hero.biography?.['full-name'] || 'Unknown'}</li>
                <li><strong>Alter Egos:</strong> {hero.biography?.['alter-egos'] || 'None'}</li>
                <li><strong>Aliases:</strong> {hero.biography?.aliases?.join(', ') || 'None'}</li>
                <li><strong>Place of Birth:</strong> {hero.biography?.['place-of-birth'] || 'Unknown'}</li>
                <li><strong>First Appearance:</strong> {hero.biography?.['first-appearance'] || 'Unknown'}</li>
                <li><strong>Publisher:</strong> {hero.biography?.publisher || 'Unknown'}</li>
                <li><strong>Alignment:</strong> {hero.biography?.alignment || 'Unknown'}</li>
              </ul>
            </section>

            <section>
              <h2
                className="mb-3 pb-1 border-amber-300 border-b-2 font-semibold text-2xl"
                style={{ color: '#6B6259' }}
              >
                Appearance
              </h2>
              <ul className="space-y-1" style={{ color: '#6B6259' }}>
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
          <h2
            className="mb-6 font-bold text-3xl text-center"
            style={{ color: '#6B6259' }}
          >
            Power Stats
          </h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {hero.powerstats &&
              Object.entries(hero.powerstats).map(([stat, value]) => {
                const valNum = Number(value);
                const validValue = isNaN(valNum) ? 0 : valNum;
                return (
                  <div
                    key={stat}
                    className="shadow-md p-5 rounded-lg"
                    style={{ backgroundColor: '#F7E7DC', border: '1px solid #E3CFC3' }}
                  >
                    <h3
                      className="mb-2 font-semibold text-lg capitalize"
                      style={{ color: '#A17C69' }}
                    >
                      {stat}
                    </h3>
                    <div
                      className="rounded-full w-full h-4 overflow-hidden"
                      style={{ backgroundColor: '#E3CFC3' }}
                    >
                      <div
                        className="rounded-full h-4 transition-all duration-500 ease-in-out"
                        style={{
                          width: `${validValue}%`,
                          backgroundColor: '#A17C69',
                        }}
                      />
                    </div>
                    <p className="mt-2 font-medium" style={{ color: '#A17C69' }}>
                      {validValue}/100
                    </p>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="mt-10 pt-8 border-t" style={{ borderColor: '#E3CFC3' }}>
          <h2
            className="mb-4 font-semibold text-2xl"
            style={{ color: '#6B6259' }}
          >
            Connections
          </h2>
          <p className="mb-1" style={{ color: '#6B6259' }}>
            <strong>Group Affiliation:</strong> {hero.connections?.['group-affiliation'] || 'Unknown'}
          </p>
          <p style={{ color: '#6B6259' }}>
            <strong>Relatives:</strong> {hero.connections?.relatives || 'Unknown'}
          </p>
        </section>

        <section className="mt-8 pt-8 border-t" style={{ borderColor: '#E3CFC3' }}>
          <h2
            className="mb-4 font-semibold text-2xl"
            style={{ color: '#6B6259' }}
          >
            Work
          </h2>
          <p className="mb-1" style={{ color: '#6B6259' }}>
            <strong>Occupation:</strong> {hero.work?.occupation || 'Unknown'}
          </p>
          <p style={{ color: '#6B6259' }}>
            <strong>Base:</strong> {hero.work?.base || 'Unknown'}
          </p>
        </section>
      </div>
    </div>
  );
}
