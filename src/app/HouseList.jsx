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
          className="h-full bg-white opacity-60 hover:opacity-100 shadow-lg rounded-2xl flex items-center justify-center hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
          href="/property"
        >
          <button className="flex items-center space-x-2 text-indigo-600 font-semibold text-lg hover:scale-105 transition-transform duration-300">
            <span>View All &rarr;</span>
          </button>
        </Link>
      )}
    </>
  )
}
