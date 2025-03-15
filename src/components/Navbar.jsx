import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="self-center sm:text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-cyan-300 to-85% to-primary bg-clip-text text-transparent">Skyline Horizons</Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer bg-primary hover:bg-blue-700">Login</button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 md:p-0 text-white bg-primary rounded-sm md:bg-transparent md:text-primary" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</Link>
            </li>
            <li>
              <Link href="/" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Add Property</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
