import Link from "next/link"

export default function Footer() {
  return (
      <footer className="bg-ink border-t border-white/[0.06]">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-10 md:py-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="self-center font-display text-2xl font-semibold tracking-tight whitespace-nowrap bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent">
              Skyline Horizons
            </Link>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 sm:mt-0 text-sm text-mist">
              <li>
                <a href="/about" className="hover:text-gold transition-colors">About</a>
              </li>
              <li>
                <a href="/property" className="hover:text-gold transition-colors">Property</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white/[0.08]" />
          <span className="block text-sm text-mist-dim spec-mono">
            © 2025 Skyline Horizons. All rights reserved.
          </span>
        </div>
      </footer>
  )
}