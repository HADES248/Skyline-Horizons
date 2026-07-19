'use client';
import { CardContext } from '@/context/card';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

export default function SearchBar() {
  const { setTitle } = useContext(CardContext);
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('searchValue');
    if (saved) setSearchValue(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue])


  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(searchValue);
    router.push('/property');
  }

  return (
    <form className="max-w-md w-[90%] sm:w-full" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-mist-dim">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="block w-full py-4 ps-11 pe-28 text-sm rounded-full bg-ink-2 border border-white/[0.08] placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
          placeholder="Search houses, villas..."
        />
        <button
          type="submit"
          className="absolute inset-y-1.5 end-1.5 px-5 rounded-full bg-gold hover:bg-gold-soft text-ink text-sm font-semibold transition-colors cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  )
}