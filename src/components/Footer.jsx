import Link from "next/link"
export default function Footer() {
  return (
      <footer className="rounded-t-lg shadow-sm bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-cyan-300 to-85% to-primary bg-clip-text text-transparent">Skyline Horizons</Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
              <li>
                <a href="/about" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="/property" className="hover:underline me-4 md:me-6">Property</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center text-gray-400">© 2025 Skyline Horizons™. All Rights Reserved.</span>
        </div>
      </footer>
  )
}

