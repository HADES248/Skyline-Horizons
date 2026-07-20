import PropertyForm from "./listingForm";

export default function Property() {

  return (
    <div className="bg-ink min-h-[calc(100vh-64px)]">
      <div className="container flex flex-col items-center py-6">
        <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">List with us</span>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-paper mt-2 mb-1 text-center">
          Create a property listing
        </h1>
        <p className="text-mist-dim text-sm mb-10 text-center max-w-md">
          Fill in the details below and add a few photos to get your property in front of buyers and renters.
        </p>

        <PropertyForm />
      </div>
    </div>
  )
}