import React, { useState } from "react";
import base from "../api/base";

export const expansionsContext = React.createContext();
export const setExpansionsContext = React.createContext();

export const ExpansionsProvider = ({ children }) => {
  const [expansions, setExpansions] = useState([
    {
      title: "Base",
      color: "black",
      colorCode: "#FFFFFF",
      isChecked: false,
      deck: [],
    },
    {
      title: "Kinetico",
      color: "green",
      colorCode: "#E7FFE4",
      isChecked: false,
      deck: [],
    },
    {
      title: "Picante",
      color: "red",
      colorCode: "#FFDFDF",
      isChecked: false,
      deck: [],
    },
    {
      title: "Drinking",
      color: "yellow",
      colorCode: "#FEFFDF",
      isChecked: false,
      deck: [],
    },
  ]);

  return (
    <expansionsContext.Provider value={expansions}>
      <setExpansionsContext.Provider value={setExpansions}>
        {children}
      </setExpansionsContext.Provider>
    </expansionsContext.Provider>
  );
};
