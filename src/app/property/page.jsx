import React from 'react'

export default function Property() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="border inline mt-4 text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600 font-semibold">Create a Property Listing</h1>
      <div className="items-center flex flex-col lg:flex-row justify-center">
        <div className="w-auto md:w-[500px] mt-8">
          <div>
            <input type="text" id="first_name" className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-3" placeholder="Name of the Property" required />
          </div>

          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-3" placeholder="Description of your property..."></textarea>

          <input type="text" id="address" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Address of the Property" required />
          <div className="flex flex-row items-center gap-4 mt-6">
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

          </div>
        </div>
        <div className="w-auto md:w-[500px] items-center flex flex-col justify-center">
          <label className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">Upload multiple files</label>
          <input type="file" className="block w-[200px] md:w-[400px] h-[50px] text-sm pl-2 pt-3.5 rounded-lg cursor-pointer bg-gray-700 border-gray-600" id="multiple_files" multiple />
        </div>
      </div>
    </div>
  )
}
