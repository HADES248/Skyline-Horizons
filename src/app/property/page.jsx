import Image from "next/image"
export default function Property() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="inline mt-4 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-600">Create a Property Listing!</h1>
      <div className="items-center flex flex-col lg:flex-row justify-center">
        <div className="w-auto sm:w-[500px] mt-8">
          <p className='flex justify-center items-center mb-2'>Details</p>
          <div>
            <input type="text" id="first_name" className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-3" placeholder="Name of the Property" required />
          </div>

          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-3" placeholder="Description of your property..." />

          <input type="text" id="address" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Address of the Property" required />

          <div className="grid grid-cols-2 md:grid-cols-4 items-center mt-4">
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="sell" type="checkbox" value="" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" required />
              </div>
              <label htmlFor="sell" className="ms-2 text-sm font-medium text-gray-300">Sell</label>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="rent" type="checkbox" value="" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" required />
              </div>
              <label htmlFor="rent" className="ms-2 text-sm font-medium text-gray-300">Rent</label>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="parking" type="checkbox" value="" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" required />
              </div>
              <label htmlFor="parking" className="ms-2 text-sm font-medium text-gray-300">Parking</label>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="furnished" type="checkbox" value="" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800" required />
              </div>
              <label htmlFor="furnished" className="ms-2 text-sm font-medium text-gray-300">Furnished</label>
            </div>
          </div>
          <input type="text" id="price" className="border text-sm rounded-lg block w-1/2 my-4 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Price" required />
          <input type="text" id="rooms" className="border text-sm rounded-lg block w-1/2 my-4 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Rooms" required />
        </div>
        <div className="w-auto md:w-[500px] items-center flex flex-col justify-center">
          <Image src="/property-page.png" alt="property image"
            width={240}
            height={180}
            quality={100}
            priority={true}
            className="w-[240px] h-[180px]" />
          <label className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">Upload multiple files (Max 6)</label>
          <input type="file" className="block w-[200px] md:w-[400px] h-[50px] text-sm pl-2 pt-3.5 rounded-lg cursor-pointer bg-gray-700 border-gray-600" id="multiple_files" multiple maxLength={6} />
          <button className="relative inline-flex items-center justify-center p-0.5 ml-1 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white mt-8">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-transparent cursor-pointer">
              Create
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
