import React from 'react';

export default function ErrorPage() {
  return (
    <div
      className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 shadow-lg mx-auto mt-20 px-6 py-10 border-4 border-red-400 rounded-xl max-w-4xl text-center"
    >
      <h1 className="drop-shadow-md mb-4 font-extrabold text-red-700 text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-red-600 text-lg">
        The page you are looking for does not exist.
      </p>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147734694.jpg?semt=ais_hybrid&w=740&q=80"
        alt="404 Not Found"
        className="shadow-md mx-auto border border-red-300 rounded-lg w-full max-w-3xl h-auto object-contain"
      />
    </div>
  );
}
