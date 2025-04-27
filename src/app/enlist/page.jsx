import PropertyForm from "./listingForm";

export default function Property() {

  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="inline mt-2 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-cyan-600 via-blue-800 to-gray-700">Create a Property Listing!</h1>
      <PropertyForm/>
    </div>
  )
}
