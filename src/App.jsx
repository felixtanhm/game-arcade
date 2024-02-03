import React from "react";
import PlayerProvider from "./components/PlayerProvider";
import Nav from "./components/Nav";

function App() {
  return (
    <PlayerProvider>
      <div className="min-h-full flex flex-col items-center justify-center">
        <Nav type="main" />
      </div>
    </PlayerProvider>
  );
}

export default App;
