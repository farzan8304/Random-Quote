import "./App.css";
import RandomQuote from "./components/randomQuote";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between items-center bg-parchment dark:bg-kombuGreen transition">
      <div className="w-full flex justify-center p-4">
        <DarkModeToggle />
      </div>
      <div className="w-full flex-grow flex items-center justify-center">
        <RandomQuote />
      </div>
    </div>
  );
}
export default App;
