export default function Home() {
  return (
    <>
      <div className="max-w-screen-2xl flex flex-col lg:flex-row items-center justify-between 2xl:mx-auto">
        <img className="w-5xl lg:w-[650px] xl:w-[800px] lg:rounded-br-xl 2xl:rounded-b-xl" src="front-page.jpg" />
        <div className="md:w-1/2 flex justify-center items-center flex-col ml-4 md:ml-10 pr-6">
          <h1 className="text-xl md:text-2xl mt-5">Welcome to Skyline Horizons</h1>
          <form className="max-w-md w-full mt-5 rounded-lg">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Search Houses, Villas..." />
            </div>
          </form>
          <div className="flex justify-between flex-col md:flex-row gap-8 mt-16">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1000+</dt>
              <dd>Premium Houses</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">80%</dt>
              <dd >Properties Sold!</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">20+</dt>
              <dd >Awards Won</dd>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-6 md:flex-row items-center w-full max-w-screen-2xl mx-auto mt-14 lg:p-4">
        <img src="no-broker.svg" className="w-[190px] lg:w-[220px]" />
        <img src="realty.png" className="w-[190px] lg:w-[220px]" />
        <img src="zillow.svg" className="w-[190px] lg:w-[220px]" />
        <img src="equinix.png" className="w-[190px] lg:w-[220px]" />
      </div>
    </>
  );
}
