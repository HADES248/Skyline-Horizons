import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-ink text-paper px-6 z-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      </div>

      <div className="relative text-center">
        <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Off the map</span>
        <h1 className="font-display text-7xl sm:text-9xl font-extrabold tracking-wide bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent mt-2">
          404
        </h1>
        <p className="text-xl sm:text-2xl font-display font-semibold mt-4 mb-2 text-paper">
          Oops! Page not found
        </p>
        <p className="text-mist mb-8 max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm font-semibold bg-gold hover:bg-gold-soft text-ink rounded-full shadow-md shadow-black/30 transition-colors duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}