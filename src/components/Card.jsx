import Image from "next/image";
import Link from "next/link";
import Skeletion from "./SkeletonCard";

export default function PropertyCard({ properties, loading }) {
  return (
    <>
      {loading ? (
        "abcdef".split("").map((i) => <Skeletion key={i} />)
      ) : (
        properties.map((property) => (
          <Link
            href={`/${property._id}`}
            key={property._id}
            className="flex flex-col w-full h-[400px] bg-gradient-to-l from-teal-600 to-primary rounded-2xl shadow-lg text-white hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="w-full h-48 relative">
              {property.images.length > 0 && (
                <Image
                  className="rounded-t-2xl object-cover"
                  src={property.images[0].url}
                  alt={property.images[0].alt || property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <span className="block text-xl font-semibold text-gray-100 mb-2">
                ₹ {property.price}
              </span>
              <h2 className="text-2xl font-bold mb-3 line-clamp-1">
                {property.title}
              </h2>
              <p className="text-lg text-gray-200 line-clamp-2">
                {property.description}
              </p>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
