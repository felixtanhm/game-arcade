import { Outlet, useMatch } from "react-router-dom";
import PlayerProvider from "../PlayerProvider";
import Nav from "../Nav";

function GameSelection() {
  const rockpaperscissors = useMatch("rockpaperscissors");
  const tictactoe = useMatch("tictactoe");
  const beatthat = useMatch("beatthat");
  const wordle = useMatch("wordle");

  const route = rockpaperscissors || tictactoe || beatthat || wordle;

  return (
    <PlayerProvider>
      <div className="min-h-full flex flex-col items-center justify-center">
        <Nav type="game" route={route.pattern.path} />
        <Outlet />
      </div>{" "}
    </PlayerProvider>
  );
}

export default GameSelection;
