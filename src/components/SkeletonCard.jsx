export default function PropertyCardSkeleton() {
  return (
    <div className="flex flex-col w-full bg-gradient-to-l from-primary via-blue-400 to-primary rounded-2xl shadow-lg animate-pulse mx-auto">
      <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
      <div className="p-6">
        <div className="h-5 bg-gray-300 rounded w-1/3 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
      </div>
    </div>
  );
}
