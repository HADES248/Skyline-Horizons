'use client';
import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {

  const [parking, setParking] = useState(false);
  const [furnished, setFurnished] = useState(false);

  return (
    <CardContext.Provider value={{ parking, setParking, furnished, setFurnished }}>
      {children}
    </CardContext.Provider>
  )
}

