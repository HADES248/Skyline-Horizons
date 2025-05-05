'use client';
import Card from '@/components/Card'
import { CardContext } from '@/context/card';
import { useContext, useState } from 'react';

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { parking, furnished } = useContext(CardContext);


  useEffect(() => {

    const getProperties = async () => {
      // Simulate a loading delay for filter
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        const response = await fetch("/api/listing", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ parking, furnished }),
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

  }, [parking, furnished])
  return (
    <Card properties={properties} loading={loading} />

  )
}
