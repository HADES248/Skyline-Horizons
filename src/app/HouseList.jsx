'use client';

import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function HouseList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const getProperties = async () => {
      // Simulate a loading delay for filter
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        const response = await fetch("/api/listing", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

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
    <Card properties={properties} loading={loading} />
  )
}
