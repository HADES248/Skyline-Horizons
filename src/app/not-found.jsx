import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 z-10">
      <div>
        <img
          src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1760431870/onpin8aeaygwci8s8dse.jpg"
          alt="Lost in space illustration"
          className="w-full max-w-md mx-auto h-40 rounded-2xl"
        />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <p className="text-2xl mt-4 mb-2">Oops! Page not found</p>
        <p className="text-lg text-white/80 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm font-semibold bg-white text-indigo-600 rounded-full shadow-md hover:bg-indigo-100 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}