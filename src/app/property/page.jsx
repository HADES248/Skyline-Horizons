import PropertyForm from "./PropertyForm";

export default function Property() {

  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="inline mt-2 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 via-purple-800 to-blue-800">Create a Property Listing!</h1>
      <PropertyForm/>
    </div>
  )
}
