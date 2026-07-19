'use client';
import { UserContext } from "@/context/user";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user || null);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);


  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setUser(null);
          redirect("/signin");
        },
      },
    });
  };

  const userDetails = () => {
    const details = document.getElementById("user");
    details.classList.toggle("hidden");
  };

  return (
    <nav className="sticky top-0 z-50 h-16 bg-ink/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="relative h-full">
        <div className="container h-full flex items-center justify-between mx-auto px-4">
          <Link
            href="/"
            className="self-center font-display text-lg sm:text-2xl font-semibold tracking-tight whitespace-nowrap
              bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent"
          >
            Skyline Horizons
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/about" className="text-sm text-mist hover:text-gold transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/enlist" className="text-sm text-mist hover:text-gold transition-colors">
                Enlist
              </Link>
            </li>
            <li>
              <Link href="/property" className="text-sm text-mist hover:text-gold transition-colors">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-mist hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-3">
            {/* Render only after loading */}
            {!loading && (
              user ? (
                <div className="relative inline-block">
                  <img
                    src={user?.image || "https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405258/user_rsntru.png"}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-full ring-2 ring-white/10 hover:ring-gold/60"
                    onClick={userDetails}
                    alt="User"
                  />
                  <div
                    className="absolute z-10 hidden top-full mt-3 w-64 right-0 p-4
                      bg-ink-2 text-paper rounded-xl shadow-xl shadow-black/40 border border-white/[0.06] transition-all duration-300"
                    id="user"
                  >
                    <p className="font-medium pb-2 border-b border-white/[0.08]">
                      Name: {user.name.split(" ")[0]}
                    </p>
                    <p className="font-medium mt-2 text-mist">Email: {user.email}</p>
                    <button
                      onClick={logout}
                      className="w-full text-ink bg-gold hover:bg-gold-soft
                        py-2 font-semibold mt-4 rounded-lg cursor-pointer transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/signin"
                  className="text-ink bg-gold hover:bg-gold-soft font-semibold
                    rounded-lg text-sm px-4 py-2.5 cursor-pointer transition-colors duration-300"
                >
                  Sign In
                </Link>
              )
            )}

            {/* Hamburger menu */}
            <button
              type="button"
              id="hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center p-2 w-9 h-9 justify-center text-sm rounded-lg md:hidden
                text-mist hover:bg-white/[0.06] transition-transform duration-300
                ${isOpen ? "rotate-180" : ""}`}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu — absolutely positioned so it overlays the page instead of
            growing the nav bar's own height (which would break every fixed
            "100vh minus navbar" layout on the site) */}
        <div
          className={`absolute top-full left-0 w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col font-medium p-4 border-t border-white/[0.06] bg-ink-2 shadow-xl shadow-black/40">
            <li>
              <Link href="/about" className="block py-2.5 px-3 rounded-sm text-sm text-mist hover:text-gold hover:bg-white/[0.06] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/enlist" className="block py-2.5 px-3 rounded-sm text-sm text-mist hover:text-gold hover:bg-white/[0.06] transition-colors">
                Enlist
              </Link>
            </li>
            <li>
              <Link href="/property" className="block py-2.5 px-3 rounded-sm text-sm text-mist hover:text-gold hover:bg-white/[0.06] transition-colors">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2.5 px-3 rounded-sm text-sm text-mist hover:text-gold hover:bg-white/[0.06] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}