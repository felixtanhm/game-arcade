import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as Switch from "@radix-ui/react-switch";
import { PlayerContext } from "../PlayerProvider";

function Nav({ route = "/" }) {
  const { playerMode, setPlayerMode } = React.useContext(PlayerContext);
  const games = [
    {
      emoji: "🪨📄✂️",
      title: "Rock, Paper, Scissors",
      route: "rockpaperscissors",
    },
    { emoji: "⭕✖️⭕", title: "Tic Tac Toe", route: "tictactoe" },
    { emoji: "🎲🎲", title: "Beat That", route: "beatthat" },
    { emoji: "🟩🔠🟨", title: "Wordle", route: "wordle" },
  ];
  if (route === "/") {
    return (
      <>
        <div className="sm:size-3/5 md:size-2/4">
          {/* Toggle Input */}
          <div className="flex justify-center">
            <label
              className="text-color font-semibold pr-4"
              htmlFor="player-mode"
            >
              MultiPlayer Mode
            </label>
            <Switch.Root
              className="toggle"
              id="player-mode"
              checked={playerMode === "multi"}
              onCheckedChange={() => {
                playerMode === "single"
                  ? setPlayerMode("multi")
                  : setPlayerMode("single");
              }}
            >
              <Switch.Thumb className="toggle-thumb" />
            </Switch.Root>
          </div>
          {/* Nav Options */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
            {games.map((game) => {
              return (
                <Link
                  key={game.route}
                  className="btn-sec-color w-full h-48 p-4 border-solid border-2 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
                  to={game.route}
                >
                  <span>{game.emoji}</span>
                  <span className="font-semibold">{game.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    const game = games.filter((game) => {
      return game.route === route;
    })[0];
    return (
      <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-5 lg:gap-0 w-full p-4 ">
        <div className="col-span-3 flex flex-col text-color items-center lg:order-last">
          <span className="font-bold text-2xl">{game.emoji}</span>
          <p className="font-bold text-xl sm:text-2xl">{game.title}</p>
        </div>
        <Button variant="secondary" href="/" customStyles={"w-fit	py-4"}>
          🕹️ Back to Selection
        </Button>
      </div>
    );
  }
}

export default Nav;
