import Image from "next/image"
export default function PropertyCard() {
  return (
    <div className="card flex flex-col max-w-sm bg-gradient-to-l from-primary via-blue-400 to-primary rounded-2xl shadow-lg text-white hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out">
      <Image
        className="rounded-t-2xl object-cover h-48"
        src="/front-page.jpg"
        alt="House1"
        width={500}
        height={300}
      />
      <div className="p-6">
        <span className="block text-xl font-semibold text-gray-100 mb-2">$ 20,000</span>
        <h2 className="text-3xl font-bold mb-3">Forest Hills Villa</h2>
        <p className="text-lg text-gray-200">Nestled in the serene embrace of Forest Hills, this ...</p>
      </div>
    </div>
  )
}

