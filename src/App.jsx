import PlayerProvider from "./components/PlayerProvider";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <PlayerProvider>
      <div className="min-h-full flex flex-col items-center justify-between">
        <div className="flex flex-col text-color items-center p-6">
          <span className="font-bold text-2xl">🕹️🎲🎮</span>
          <p className="font-bold text-xl sm:text-2xl">Game Arcade</p>
        </div>
        <Nav route="/" />
        <Footer />
      </div>
    </PlayerProvider>
  );
}

export default App;
