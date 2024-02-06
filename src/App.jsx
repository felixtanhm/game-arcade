import PlayerProvider from "./components/PlayerProvider";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <PlayerProvider>
      <div className="min-h-full flex flex-col items-center justify-between">
        <Nav route="/" />
        <Footer />
      </div>
    </PlayerProvider>
  );
}

export default App;
