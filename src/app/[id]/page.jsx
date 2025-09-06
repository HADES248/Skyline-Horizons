'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function PropertyDetails() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [property, setProperty] = useState([]);

  //using pathname to get the id of the property.
  const pathname = usePathname();
  const id = pathname.split('/')[1];


  useEffect(() => {
    const getProperty = async () => {
      fetch('/api/property', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      }).then((response) => {
        try {
          if (response.ok) {
            response.json().then((data) => {
              setProperty(data.property);
            })
          }
        } catch (err) { console.log(err) }
      })
    }
    getProperty();
  }, [])

  const slides = [
    { src: '/front-page.jpg', alt: "first house" },
    { src: '/about-page.jpg', alt: "second house" },
    { src: '/front-page.jpg', alt: "third house" },
    { src: '/about-page.jpg', alt: "fourth house" },
  ]

  // making carousel move on swipe.
  let startX = 0;
  const handleTouchStart = (e) => {
    // gets the start coordinate of touch.
    startX = e.touches[0].clientX;
  }

  const handleTouchEnd = (e) => {
    // gets the end coordinate of touch.
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  }
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
  }
  const handleNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <main className='container'>
      <div className="relative w-full">
        <div className="relative h-[300px] sm:h-[450px] xl:mt-7 flex justify-center">
          <Image className="absolute h-full w-full xl:w-[75%] xl:rounded-2xl"
            src={slides[currentIndex].src}
            width={1200}
            height={800}
            priority="true"
            quality={100}
            alt={slides[currentIndex].alt}
            onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
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
      <div className="mx-auto mt-8 mb-8 w-[73%] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-500">
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-2 text-white/90">{property.name}</h1>
          <h2 className="text-gray-300 mb-4">{property.description}</h2>
          <div className="text-gray-300 text-sm mb-4">
            <p><strong>Address:</strong> {property.address}</p>
            <p><strong>Rooms:</strong> {property.rooms}</p>
          </div>
          <div className="flex justify-between items-center">
            <button className={`text-xl font-bold text text-green-600 cursor-pointer `}>
              {property.sell ? "For Sale" : "For Rent"}
            </button>
            <p className="text-white/90 font-bold">₹ {property.price}</p>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-white/90">
            {property.furnished ? <div className="flex items-center">
              <img src="bed.svg" alt="bed svg" className='w-8 m-2 pb-1 inline' />
              <p>Furnished</p>
            </div> :
              <p>Not Furnished</p>}
            {property.parking ? <div className='flex items-center'>
              <img src="car.svg" alt="car svg" className='w-8 m-2 pb-1 inline' />
              <p>Parking</p>
            </div> :
              <p>No Parking</p>}
          </div>
        </div>
      </div>
    </main>
  )
}
