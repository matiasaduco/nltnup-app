import React, { useState } from "react";

export const gameContext = React.createContext();
export const setGameContext = React.createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState({
    deck: undefined,
    chaosCard: undefined,
    expansionsInGame: [],
    playedCards: [],
    rounds: 1,
    bombsInGame: 0,
  });

  return (
    <gameContext.Provider value={game}>
      <setGameContext.Provider value={setGame}>
        {children}
      </setGameContext.Provider>
    </gameContext.Provider>
  );
};
