'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import loading from '../loading';

export default function PropertyDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [property, setProperty] = useState(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await fetch('/api/property', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id })
        });

        if (response.ok) {
          const data = await response.json();
          setProperty(data.property);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getProperty();
  }, [id]);

  // Carousel handlers
  let startX = 0;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    if (!property?.images) return;
    setCurrentIndex(currentIndex === 0 ? property.images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    if (!property?.images) return;
    setCurrentIndex(currentIndex === property.images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!property) {
    return loading();
  }

  return (
    <main className='container'>
      <div className="relative w-full">
        <div className="relative h-[300px] sm:h-[450px] xl:mt-7 flex justify-center">
          <Image
            className="absolute h-full w-full xl:w-[75%] xl:rounded-2xl object-cover"
            key={property?._id + currentIndex}
            src={property?.images?.[currentIndex]?.url}
            width={1200}
            height={800}
            priority
            quality={100}
            alt={property?.images?.[currentIndex]?.alt || "Property image"}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />

        </div>

        {/* Prev Button */}
        <button
          type="button"
          className="absolute flex top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70">
            <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70">
            <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </span>
        </button>
      </div>

      {/* Property Info */}
      <div className="mx-auto mt-8 mb-8 w-[90%] sm:w-[75%] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-l from-teal-600 to-primary">
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-2 text-white/90">{property.title}</h1>
          <h2 className="text-gray-300 mb-4">{property.description}</h2>
          <div className="text-gray-300 text-sm mb-4">
            <p><strong>Address:</strong> {property.address}</p>
            <p><strong>Rooms:</strong> {property.rooms}</p>
          </div>
          <div className="flex justify-between items-center">
            <button className="text-xl font-bold text-green-600 cursor-pointer">
              {property.sell ? "For Sale" : property.rent ? "For Rent" : "N/A"}
            </button>
            <p className="text-white/90 font-bold">₹ {property.price}</p>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-white/90">
            {property.furnished ? (
              <div className="flex items-center">
                <img src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1759155162/wtugxveyozhmjmngb9qb.png" alt="bed icon" className='w-8 m-2 pb-1 inline' />
                <p>Furnished</p>
              </div>
            ) : (
              <p>Not Furnished</p>
            )}

            {property.parking ? (
              <div className='flex items-center'>
                <img src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1759155162/llxrkkdadpe10n5qspui.png" alt="car icon" className='w-8 m-2 pb-1 inline' />
                <p>Parking</p>
              </div>
            ) : (
              <p>No Parking</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
