import Image from "next/image"
import Link from "next/link";
import Skeletion from "./SkeletonCard";

export default function PropertyCard({ properties, loading }) {
  return (
    <>
      {loading ? (
        "abcdef".split('').map((i) => (
          <Skeletion key={i} />
        ))
      ) : (
        properties.map((property) => (
          <Link href={`/${property._id}`} className="flex flex-col w-full bg-gradient-to-l from-primary via-blue-400 to-primary rounded-2xl shadow-lg text-white hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out" key={property._id}>
            <Image
              className="rounded-t-2xl object-cover h-[3/4] w-full"
              src="/front-page.jpg"
              alt="House1"
              width={500}
              height={300}
              priority={false}
            />
            <div className="p-6">
              <span className="block text-xl font-semibold text-gray-100 mb-2">₹ {property.price}</span>
              <h2 className="text-3xl font-bold mb-3">{property.name}</h2>
              <p className="text-lg text-gray-200">{property.description.slice(0, 60)}..</p>
            </div>
          </Link>
        ))
      )}
    </>
  )
}

