import { HomePage } from "./pages/home-page";
import background from "./icons/navbar/bg.png";
import background_phone from "./icons/navbar/bg-phone.png";
function App() {
  return (
    <>
      <img className="z-1 absolute hidden md:block" src={background} alt="" />
      <img
        className="z-1 absolute w-full block md:hidden"
        src={background_phone}
        alt=""
      />
      <HomePage></HomePage>
    </>
  );
}

export default App;
