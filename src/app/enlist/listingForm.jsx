'use client';
import Image from "next/image"
import { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';

export default function PropertyForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);
  const [parking, setParking] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [price, setPrice] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [images, setImages] = useState([]);

  const handleUploadSuccess = (result) => {
    const uploadedImage = {
      url: result.info.secure_url,
      alt: result.info.original_filename
    }
    setImages((prevImage) => [...prevImage, uploadedImage])
  }

  const removeImage = (index) => {
    setImages((prevImage) => prevImage.filter((_, i) => i !== index));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      title,
      description,
      address,
      sell,
      rent,
      parking,
      furnished,
      price: Number(price),
      rooms: Number(rooms),
      images
    };

    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(propertyData)
    });

    if (response.ok){
      alert("Property Enlisted Successfully!");
      setImages([]);
    }
  }

  const toggles = [
    { id: "sell", label: "Sell", checked: sell, onChange: () => setSell(!sell) },
    { id: "rent", label: "Rent", checked: rent, onChange: () => setRent(!rent) },
    { id: "parking", label: "Parking", checked: parking, onChange: () => setParking(!parking) },
    { id: "furnished", label: "Furnished", checked: furnished, onChange: () => setFurnished(!furnished) },
  ];

  return (
    <form className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start" onSubmit={handleSubmit}>
      {/* ============ DETAILS ============ */}
      <div className="p-6 sm:p-8 bg-ink-2 border border-white/[0.06] rounded-2xl">
        <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Step 1</span>
        <h2 className="font-display text-xl font-semibold text-paper mt-2 mb-5">Property details</h2>

        <div className="mb-4">
          <label htmlFor="first_name" className="block mb-1.5 text-sm font-medium text-paper">Property name</label>
          <input
            type="text"
            id="first_name"
            className="text-sm rounded-lg block w-full p-2.5 bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow"
            placeholder="Name of the property"
            autoComplete="off"
            maxLength={50}
            onChange={(e) => { setTitle(e.target.value) }}
            value={title}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-paper">Description</label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm rounded-lg bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow resize-none"
            placeholder="Description of your property..."
            maxLength={200}
            onChange={(e) => { setDescription(e.target.value) }}
            value={description}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="address" className="block mb-1.5 text-sm font-medium text-paper">Address</label>
          <input
            type="text"
            id="address"
            className="text-sm rounded-lg block w-full p-2.5 bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow"
            placeholder="Address of the property"
            autoComplete="off"
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}
            required
          />
        </div>

        <span className="spec-mono text-xs tracking-[0.15em] text-mist-dim uppercase">Listing type &amp; amenities</span>
        <div className="grid grid-cols-2 gap-2.5 mt-3 mb-5">
          {toggles.map((t) => (
            <label
              key={t.id}
              htmlFor={t.id}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm font-medium ${t.checked ? "border-gold/40 bg-gold/10 text-gold" : "border-white/[0.08] text-mist hover:border-white/20"
                }`}
            >
              <span>{t.label}</span>
              <input
                id={t.id}
                type="checkbox"
                className="w-4 h-4 rounded border border-white/20 bg-ink accent-gold cursor-pointer"
                onChange={t.onChange}
                checked={t.checked}
              />
            </label>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block mb-1.5 text-sm font-medium text-paper">Price (₹)</label>
            <input
              type="number"
              id="price"
              className="text-sm rounded-lg block w-full p-2.5 bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow"
              placeholder="Price"
              required
              min={1}
              onChange={(e) => { setPrice(e.target.value) }}
              value={price}
            />
          </div>
          <div>
            <label htmlFor="rooms" className="block mb-1.5 text-sm font-medium text-paper">Rooms</label>
            <input
              type="number"
              id="rooms"
              className="text-sm rounded-lg block w-full p-2.5 bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow"
              placeholder="Rooms"
              max={30}
              min={1}
              onChange={(e) => { setRooms(e.target.value) }}
              value={rooms}
              required
            />
          </div>
        </div>
      </div>

      {/* ============ IMAGES ============ */}
      <div className="p-6 sm:p-8 bg-ink-2 border border-white/[0.06] rounded-2xl flex flex-col">
        <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Step 2</span>
        <h2 className="font-display text-xl font-semibold text-paper mt-2 mb-5">Photos</h2>

        <CldUploadWidget uploadPreset="house_images" onSuccess={handleUploadSuccess}>
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="w-full h-[120px] flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/15 hover:border-gold/40 bg-white/[0.02] hover:bg-white/[0.04] text-mist hover:text-gold text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
              </svg>
              Upload images (max 4)
            </button>
          )}
        </CldUploadWidget>

        {images.length > 0 && (
          <div className="grid grid-cols-4 gap-2.5 mt-4">
            {images.map((img, i) => (
              <div key={img.url + i} className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/[0.08] group">
                <Image src={img.url} alt={img.alt || "Property photo"} fill className="object-cover" sizes="120px" />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center rounded-full bg-ink/80 text-mist hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove image"
                >
                  <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 5 10 10M15 5 5 15" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        <span className={`text-xs mt-2 ${images.length >= 4 ? "text-red-400" : "invisible"}`}>
          You can only upload 4 pictures
        </span>

        <div className="mt-auto pt-8 flex flex-col items-center">
          <div className="w-full max-w-[220px] rounded-xl overflow-hidden border border-white/[0.06] mb-6 opacity-70">
            <Image
              src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405247/property-page_u7lxcz.png"
              alt="Property illustration"
              width={275}
              height={183}
              quality={100}
              className="w-full h-auto object-cover"
            />
          </div>

          <button
            type="submit"
            className="w-full text-ink bg-gold hover:bg-gold-soft font-semibold rounded-lg text-sm py-3 text-center cursor-pointer transition-colors duration-300"
          >
            Create listing
          </button>
        </div>
      </div>
    </form>
  )
}