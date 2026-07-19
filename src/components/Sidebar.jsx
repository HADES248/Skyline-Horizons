'use client';
import { useContext } from "react";
import { CardContext } from "@/context/card";

export default function SidebarModal({ isOpen, onClose }) {

  const { parking, setParking, furnished, setFurnished } = useContext(CardContext);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-ink-2 border-r border-white/[0.06] shadow-2xl shadow-black/40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        // This function allows us to stop the click event from propagating to the parent div(the above main one), which would close the sidebar when we click inside it.
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <h2 className="font-display text-lg font-semibold text-paper">Filter</h2>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full text-mist-dim hover:text-gold hover:bg-white/[0.06] transition-colors cursor-pointer"
            onClick={onClose}
            aria-label="Close filters"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <span className="spec-mono text-xs tracking-[0.15em] text-mist-dim uppercase">Amenities</span>

          <ul className="mt-4 space-y-2">
            <li>
              <label
                htmlFor="parking"
                className={`flex items-center justify-between px-4 py-3 rounded-lg border cursor-pointer transition-colors ${parking ? "border-gold/40 bg-gold/10 text-gold" : "border-white/[0.08] text-mist hover:border-white/20"
                  }`}
              >
                <span className="text-sm font-medium">Parking</span>
                <input
                  type="checkbox"
                  id="parking"
                  onChange={() => setParking(!parking)}
                  checked={parking}
                  className="w-4 h-4 rounded border border-white/20 bg-ink accent-gold cursor-pointer"
                />
              </label>
            </li>
            <li>
              <label
                htmlFor="furnished"
                className={`flex items-center justify-between px-4 py-3 rounded-lg border cursor-pointer transition-colors ${furnished ? "border-gold/40 bg-gold/10 text-gold" : "border-white/[0.08] text-mist hover:border-white/20"
                  }`}
              >
                <span className="text-sm font-medium">Furnished</span>
                <input
                  type="checkbox"
                  id="furnished"
                  onChange={() => setFurnished(!furnished)}
                  checked={furnished}
                  className="w-4 h-4 rounded border border-white/20 bg-ink accent-gold cursor-pointer"
                />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};