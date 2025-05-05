import React from 'react'

export default function SearchBar() {
  return (
    <form className="max-w-md w-[80%] sm:w-full rounded-lg">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Search Houses, Villas..." />
      </div>
    </form>
  )
}
