import React, { useState } from "react";

export const playerContext = React.createContext();
export const setPlayerContext = React.createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <playerContext.Provider value={players}>
      <setPlayerContext.Provider value={setPlayers}>
        {children}
      </setPlayerContext.Provider>
    </playerContext.Provider>
  );
};
