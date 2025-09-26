import PropertyForm from "./listingForm";

export default function Property() {

  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="inline mt-4 font-semibold text-white">Create a Property Listing!</h1>
      <PropertyForm/>
    </div>
  )
}
