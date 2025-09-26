'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function SearchBar() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    const saved = localStorage.getItem('searchValue');
    if (saved) setSearchValue(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue])

  useEffect(() => {
    const searchBar = document.querySelector("#search");
    searchBar.addEventListener("input", (e) => {
      console.log(e.target.value);
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/property');
  }

  return (
    <form className="max-w-md w-[80%] sm:w-full rounded-lg" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Search Houses, Villas..." />
      </div>
    </form>
  )
}
