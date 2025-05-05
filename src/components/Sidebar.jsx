'use client';
import { useContext } from "react";
import { CardContext } from "@/context/card";

export default function SidebarModal({ isOpen, onClose }) {

  const { parking, setParking, furnished, setFurnished } = useContext(CardContext);

  return (
    <div
      className={`fixed inset-0 z-50 duration-300 ${isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        // This function allows us to stop the click event from propagating to the parent div(the above main one), which would close the sidebar when we click inside it.
        onClick={(e) => e.stopPropagation()}
      >
        <button className="px-4 py-2 mx-2 my-2 text-sm rounded-lg bg-primary hover:text-cyan-600 cursor-pointer" onClick={onClose} >Close</button>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <ul>
            <li className="mb-2">
              <input type="checkbox" id="parking" onChange={() => setParking(!parking)} checked={parking} className="mr-2" />
              <label htmlFor="parking">Parking</label>
            </li>
            <li>
              <input type="checkbox" id="furnished" onChange={() => setFurnished(!furnished)} checked={furnished} className="mr-2" />
              <label htmlFor="furnished">Furnished</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

