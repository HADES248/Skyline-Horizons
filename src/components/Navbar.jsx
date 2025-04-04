'use client';
import Link from "next/link";

export default function Navbar() {

  const navFunction = () => {
    const ham = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
      ham.classList.add('rotate-180');
      menu.classList.remove('hidden');
    } else {
      ham.classList.remove('rotate-180');
      menu.classList.add('hidden');
    }
  }

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-cyan-300 to-85% to-primary bg-clip-text text-transparent">Skyline Horizons</Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/login" type="button" className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer bg-primary hover:bg-blue-700">Login</Link>
          <button type="button" id="hamburger" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-gray-400 hover:bg-gray-700 transition-all ease-in-out duration-300" onClick={navFunction}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="menu">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link href="/about" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
            </li>
            <li>
              <Link href="/property" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Property</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
