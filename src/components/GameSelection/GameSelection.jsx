import { Outlet } from "react-router-dom";
import Nav from "../Nav";

function GameSelection() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center">
      <Nav type="game" />
      <Outlet />
    </div>
  );
}

export default GameSelection;
