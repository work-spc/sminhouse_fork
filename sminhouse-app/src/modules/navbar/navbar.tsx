import logo from "../../icons/navbar/logo.svg";
import button from "../../icons/navbar/button.svg";
import arrow_input from "../../icons/navbar/arrow-input.svg";
import "./style.css";

export const Navbar: React.FC = () => {
  return (
    <div className=" z-30 navbar pt-6 max-w-1368">
      <div className="z-30  bg-white bg-opacity-80 backdrop-blur-sm m-auto p-4 md:px-11 mdpx-11  md:mb-10 py-5  flex justify-between items-center border rounded-2xl ">
        <button>
          <img src={logo} alt="" />
        </button>

        <div className="flex justify-center items-center">
          <div className="hidden lg:flex">
            <button className="mx-1 border border-transparent hover:border-accent_border  focus:outline-none rounded-lg py-2 px-4  hover:text-accent_font transition-colors duration-300 bg-transparent hover:bg-transparent ">
              Решения
            </button>

            <button className="mx-1 border border-transparent hover:border-accent_border  focus:outline-none rounded-lg py-2 px-4  hover:text-accent_font transition-colors duration-300 bg-transparent hover:bg-transparent ">
              Проекты
            </button>
            <button className="mx-1 border border-transparent hover:border-accent_border  focus:outline-none rounded-lg py-2 px-4  hover:text-accent_font transition-colors duration-300 bg-transparent hover:bg-transparent ">
              Партнеры
            </button>
            <button className="mx-1 border border-transparent hover:border-accent_border  focus:outline-none rounded-lg py-2 px-4  hover:text-accent_font transition-colors duration-300 bg-transparent hover:bg-transparent ">
              О нас
            </button>
          </div>
        </div>

        <div className=" text-accent_font hidden lg:flex">
          <button className="mr-6">+7(800)800-80-80</button>
          <button className="flex px-6 py-3.5 items-center border rounded-2xl border-accent_border hover:bg-accent_background hover:bg-opacity-10 duration-300">
            <p className="mr-3">Войти</p>
            <img src={arrow_input} alt="" />
          </button>
        </div>
        <button className="lg:hidden ">
          <img src={button} alt="" />
        </button>
      </div>
    </div>
  );
};
