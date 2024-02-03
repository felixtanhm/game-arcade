import React from "react";

export const PlayerContext = React.createContext("single");

function PlayerProvider({ children }) {
  const [playerMode, setPlayerMode] = React.useState("single");
  return (
    <PlayerContext.Provider value={{ playerMode, setPlayerMode }}>
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerProvider;
