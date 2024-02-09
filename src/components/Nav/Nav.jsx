import { Link } from "react-router-dom";
import Button from "../Button";

function Nav({ route = "/" }) {
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
        {/* Nav Options */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 sm:gap-4">
          {games.map((game) => {
            return (
              <Link
                key={game.route}
                className="bg-indigo-100 text-slate-900 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 w-full h-48 p-4 sm:p-8 rounded-lg flex flex-col gap-1 items-center justify-center text-center"
                to={game.route}
              >
                <span>{game.emoji}</span>
                <span className="font-semibold">{game.title}</span>
              </Link>
            );
          })}
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
        <Button variant="soft" type="link" href="/" customStyles={"w-fit	py-4"}>
          🕹️ Back to Selection
        </Button>
      </div>
    );
  }
}

export default Nav;
