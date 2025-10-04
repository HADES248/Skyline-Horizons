'use client';
import { UserContext } from "@/context/user";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true); // local loading

  // fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/login");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user || null);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false); // stop loading
      }
    };
    fetchUser();
  }, [setUser]);

  const logout = async () => {
    try {
      await fetch("/api/logout", { method: "GET" });
      setUser(null);
      alert("Logged Out successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const userDetails = () => {
    const details = document.getElementById("user");
    details.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap 
            bg-gradient-to-r from-cyan-300 to-primary bg-clip-text text-transparent"
        >
          Skyline Horizons
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          {/* Render only after loading */}
          {!loading && (
            user ? (
              <div className="relative inline-block">
                <img
                  src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405258/user_rsntru.png"
                  className="w-10 lg:mr-8 cursor-pointer transition-transform duration-300 hover:scale-110"
                  onClick={userDetails}
                  alt="User"
                />
                <div
                  className="absolute z-10 hidden top-full mt-2 w-64 right-0 lg:right-12 p-4 
                    bg-gray-900 text-white rounded-xl shadow-lg transition-all duration-300"
                  id="user"
                >
                  <p className="font-bold pb-2 border-b border-gray-700">
                    Name: {user.username.split(" ")[0]}
                  </p>
                  <p className="font-bold mt-2">Email: {user.email}</p>
                  <button
                    onClick={logout}
                    className="w-full text-white hover:text-gray-800 bg-primary hover:bg-white 
                      py-2 font-bold mt-4 rounded-xl cursor-pointer transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-white hover:text-gray-800 bg-primary hover:bg-white font-medium 
                  rounded-lg text-sm px-4 py-2 cursor-pointer"
              >
                Login
              </Link>
            )
          )}

          {/* Hamburger menu */}
          <button
            type="button"
            id="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center p-2 w-8 h-8 justify-center text-sm rounded-lg md:hidden 
              text-gray-400 hover:bg-gray-700 transition-transform duration-300 
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

        {/* Mobile Menu */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-500 ease-in-out 
            md:max-h-none md:opacity-100 
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg 
            md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
            bg-gray-800 md:bg-gray-900 border-gray-700"
          >
            <li>
              <Link href="/about" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 md:hover:bg-transparent">
                About
              </Link>
            </li>
            <li>
              <Link href="/enlist" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 md:hover:bg-transparent">
                Enlist
              </Link>
            </li>
            <li>
              <Link href="/property" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 md:hover:bg-transparent">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-primary text-white hover:bg-gray-700 md:hover:bg-transparent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
