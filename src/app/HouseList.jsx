'use client';
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function HouseList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const getProperties = async () => {

      setLoading(true);

      try {
        const response = await fetch("/api/listing", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        // Simulate a loading delay for filter
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (response.ok) {
          const data = await response.json();
          setProperties(data.properties)
        } else {
          console.error("Failed to Fetch Data");
        }
      } catch (err) {
        console.error("Failed to Fetch Data", err);
      } finally {
        setLoading(false);
      }
    }

    getProperties();

  }, [])
  return (
    <>
      <Card properties={properties} loading={loading} />
      {!loading && properties.length > 0 && (
        <Link
          className="h-16 sm:h-full min-h-[120px] bg-ink-2 border border-white/[0.08] hover:border-gold/40 rounded-2xl flex items-center justify-center hover:shadow-2xl hover:shadow-black/30 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          href="/property"
        >
          <button className="flex items-center space-x-2 text-gold font-display font-semibold text-lg cursor-pointer">
            <span>View All &rarr;</span>
          </button>
        </Link>
      )}
    </>
  )
}