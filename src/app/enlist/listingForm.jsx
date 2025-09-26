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
  return (
    <form className="items-center flex flex-col lg:flex-row justify-center" onSubmit={handleSubmit}>
      <div className="w-auto sm:w-[500px] mt-8">
        <p className='flex justify-center items-center mb-2'>Details</p>
        <div>
          <input type="text" id="first_name" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-3" placeholder="Name of the Property" autoComplete="off" maxLength={50} onChange={(e) => { setTitle(e.target.value) }} value={title} required />
        </div>

        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-3" placeholder="Description of your property..." maxLength={200} onChange={(e) => { setDescription(e.target.value) }} value={description} />

        <input type="text" id="address" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Address of the Property" autoComplete="off" onChange={(e) => { setAddress(e.target.value) }} value={address} required />

        <div className="grid grid-cols-2 md:grid-cols-4 items-center mt-4">
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="sell" type="checkbox" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" onChange={() => setSell(!sell)} />
            </div>
            <label htmlFor="sell" className="ms-2 text-sm font-medium text-gray-300">Sell</label>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="rent" type="checkbox" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" onChange={() => setRent(!rent)} />
            </div>
            <label htmlFor="rent" className="ms-2 text-sm font-medium text-gray-300">Rent</label>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="parking" type="checkbox" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" onChange={() => setParking(!parking)} />
            </div>
            <label htmlFor="parking" className="ms-2 text-sm font-medium text-gray-300">Parking</label>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="furnished" type="checkbox" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" onChange={() => { setFurnished(!furnished) }} />
            </div>
            <label htmlFor="furnished" className="ms-2 text-sm font-medium text-gray-300">Furnished</label>
          </div>
        </div>
        <input type="number" id="price" className="border text-sm rounded-lg block w-1/2 my-4 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Price" required min={1} onChange={(e) => { setPrice(e.target.value) }} value={price} />
        <input type="number" id="rooms" className="border text-sm rounded-lg block w-1/2 my-4 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Rooms" max={30} min={1} onChange={(e) => { setRooms(e.target.value) }} value={rooms} required />
      </div>
      <div className="w-[60%] items-center flex flex-col justify-center">
        <div className="w-[240px] h-[180px]">
          <Image src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405247/property-page_u7lxcz.png" alt="property image"
            width={275}
            height={183}
            quality={100}
            priority={true}
          />
        </div>
        <p className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">Upload multiple files (Max 4)</p>
        <CldUploadWidget uploadPreset="house_images" onSuccess={handleUploadSuccess}>
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="w-[200px] md:w-[400px] h-[50px] flex items-center justify-center rounded-lg 
             bg-gray-700 border border-gray-600 text-white text-sm font-medium 
             hover:bg-gray-600 hover:border-gray-500 transition-colors duration-200 
             focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer shadow-sm"
            >
              Upload Images
            </button>
          )}
        </CldUploadWidget>
        <span className="hidden text-red-800 text-sm mt-1" id="picture" >You can only Upload 4 pictures</span>
        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 ml-1 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white mt-8">
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-transparent cursor-pointer">
            Create
          </span>
        </button>
      </div>
    </form>
  )
}
