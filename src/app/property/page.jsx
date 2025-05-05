'use client';
import SearchBar from '@/components/SearchBar'
import Card from '@/components/Card'
import SidebarModal from '@/components/Sidebar';
import { useState } from 'react';
import PropertyList from './PropertyList';

export default function PropertyPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="container flex flex-col justify-center items-center mt-8 mb-8">
      <div className="flex flex-row-reverse justify-center items-center w-full gap-6">
        <img src="/filter.png" alt="filter img" className='w-8 cursor-pointer' onClick={() => setIsOpen(true)} />
        <SearchBar />
      </div>
      <SidebarModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[95%] gap-6 mt-8 justify-items-center">
        <PropertyList />
      </div>
    </main>
  )
}
