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
            className="group flex flex-col w-full h-[400px] bg-ink-2 rounded-2xl overflow-hidden
              border border-white/[0.06] hover:border-gold/40
              shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30
              cursor-pointer transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <div className="w-full h-48 relative shrink-0 bg-ink-3">
              {property.images.length > 0 && (
                <Image
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={property.images[0].url}
                  alt={property.images[0].alt || property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 spec-mono text-xs font-medium px-2.5 py-1 rounded-full bg-ink/80 backdrop-blur-sm text-gold border border-gold/30">
                ₹ {property.price}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow min-h-0">
              <h2 className="font-display text-xl font-semibold text-paper mb-2 line-clamp-1">
                {property.title}
              </h2>
              <p className="text-sm text-mist leading-relaxed line-clamp-2">
                {property.description}
              </p>
              <span className="mt-auto pt-3 text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                View details &rarr;
              </span>
            </div>
          </Link>
        ))
      )}
    </>
  );
}