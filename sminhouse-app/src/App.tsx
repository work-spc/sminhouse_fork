import { HomePage } from "./pages/home-page";
import background from "./icons/navbar/bg.svg";
import "./App.css";
function App() {
  return (
    <div className="relative overflow-hidden">
      <img
        className="z-1 absolute right-[55%] top-[-11%] hidden md:block rotate"
        src={background}
        alt=""
      />

      <img
        className="z-1 absolute w-full block top-[-2%] md:hidden rotate-mobile scale-[200%]"
        src={background}
        alt=""
      />
      <HomePage></HomePage>
    </div>
  );
}

export default App;
