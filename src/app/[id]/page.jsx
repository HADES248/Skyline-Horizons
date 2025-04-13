'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function PropertyDetails() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: '/front-page.jpg', alt: "first house" },
    { src: '/about-page.jpg', alt: "second house" },
    { src: '/front-page.jpg', alt: "third house" },
    { src: '/about-page.jpg', alt: "fourth house" },
  ]

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
  }
  const handleNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <main className='container'>
      {/* <Image src="/front-page.jpg" width={1150} height={764} quality={100} alt='first house' className='w-[100%] h-[450px] mx-auto' /> */}

      <div className="relative w-full">
        <div className="relative h-[400px] overflow-hidden">
          <div className="transition-all duration-700 ease-in-out xl:flex xl:justify-center">
            <Image className="absolute block h-[70%] sm:h-full w-full xl:w-[90%] xl:rounded-b-xl"
              src={slides[currentIndex].src}
              width={1200}
              height={800}
              priority="true"
              quality={100}
              alt={slides[currentIndex].alt} />
          </div>
        </div>
        <button type="button" className="absolute flex top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev}>
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext}>
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </main>
  )
}
