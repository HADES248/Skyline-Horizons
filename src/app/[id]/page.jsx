'use client';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import loading from '../loading';

export default function PropertyDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [property, setProperty] = useState(null);
  const [notFoundState, setNotFoundState] = useState(false);

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
        if (response.status === 404) {
          setNotFoundState(true);
          return;
        }

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

  if (notFoundState) return notFound();

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

  const status = property.sell ? "For Sale" : property.rent ? "For Rent" : "N/A";

  return (
    <main className='container pb-16'>
      <div className="relative w-full">
        <div className="relative h-[300px] sm:h-[480px] xl:mt-8 flex justify-center">
          <div className="absolute h-full w-full xl:w-[75%] xl:rounded-2xl overflow-hidden bg-ink-2 border border-white/[0.06]">
            <Image
              className="object-cover"
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />

            {/* Image counter — mono, reads like a spec label */}
            {property.images?.length > 1 && (
              <span className="absolute bottom-4 right-4 sm:right-[calc(12.5%+1rem)] spec-mono text-xs px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur-sm text-gold border border-gold/30">
                {currentIndex + 1} / {property.images.length}
              </span>
            )}
          </div>
        </div>

        {/* Prev Button */}
        <button
          type="button"
          className="absolute flex top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink/50 border border-white/10 group-hover:bg-gold group-hover:border-gold transition-colors">
            <svg className="w-4 h-4 text-paper group-hover:text-ink transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
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
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink/50 border border-white/10 group-hover:bg-gold group-hover:border-gold transition-colors">
            <svg className="w-4 h-4 text-paper group-hover:text-ink transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </span>
        </button>
      </div>

      {/* Property Info */}
      <div className="mx-auto mt-8 w-[90%] sm:w-[75%] rounded-2xl border border-white/[0.06] shadow-lg shadow-black/20 overflow-hidden bg-ink-2">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-2">{property.title}</h1>
              <span className={`inline-block spec-mono text-xs px-2.5 py-1 rounded-full border ${property.sell ? "text-gold border-gold/40 bg-gold/10" : property.rent ? "text-dusk-blue border-dusk-blue/40 bg-dusk-blue/10" : "text-mist-dim border-white/10"}`}>
                {status}
              </span>
            </div>
            <p className="spec-mono text-2xl font-semibold text-gold whitespace-nowrap">₹ {property.price}</p>
          </div>

          <p className="text-mist leading-relaxed mb-6">{property.description}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-6 pt-6 border-t border-white/[0.08]">
            <div className="flex justify-between sm:block">
              <dt className="text-mist-dim">Address</dt>
              <dd className="text-paper sm:mt-1">{property.address}</dd>
            </div>
            <div className="flex justify-between sm:block">
              <dt className="text-mist-dim">Rooms</dt>
              <dd className="text-paper sm:mt-1">{property.rooms}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${property.furnished ? "border-gold/30 bg-gold/10 text-gold" : "border-white/[0.08] text-mist-dim"}`}>
              <img src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1759155162/wtugxveyozhmjmngb9qb.png" alt="" className="w-5 h-5" />
              <span>{property.furnished ? "Furnished" : "Not furnished"}</span>
            </div>

            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${property.parking ? "border-gold/30 bg-gold/10 text-gold" : "border-white/[0.08] text-mist-dim"}`}>
              <img src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1759155162/llxrkkdadpe10n5qspui.png" alt="" className="w-5 h-5" />
              <span>{property.parking ? "Parking available" : "No parking"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}