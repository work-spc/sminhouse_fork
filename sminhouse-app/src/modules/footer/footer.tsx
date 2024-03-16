import logo from "../../icons/footer/logo.png";
import dzen from "../../icons/footer/Yandex_Zen_logo_icon.svg";
import youtube from "../../icons/footer/youtube.svg";
import vk from "../../icons/footer/VK.com-logo.svg";
import telegram from "../../icons/footer/Telegram_2019_Logo 1.svg";

export const Footer = () => {
  return (
    <footer className="text-gray_font">
      <div className="md:flex mb-9 md:mb-9">
        <div className="md:w-1/2">
          <img
            className="m-auto md:m-0 md:mr-auto  mb-9 md:mb-7"
            src={logo}
            alt=""
          />
          <p className="hidden md:block mb-4  text-gray_font">
            Краснодарский край, г. Сочи,
            <br /> ул. Пластунская, д.96 пом 6/1
          </p>
          <p className="hidden md:block text-gray_font ">ИНН 2366020108</p>
        </div>
        <div className="w-1/4 hidden md:block ">
          <ul className="text-light_dark_font font-medium h-full flex flex-col justify-between ">
            <li>
              <a href="">Решения</a>
            </li>
            <li>
              <a href="">Проекты</a>
            </li>
            <li>
              <a href="">Партнеры</a>
            </li>
            <li>
              <a href="">О нас</a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/5 text-light_dark_font font-medium flex flex-col justify-between">
          <div className="flex gap-2 justify-evenly md:justify-between mb-6 md:mb-0">
            <img className="" src={dzen} alt="" />
            <img className="" src={youtube} alt="" />
            <img className="" src={vk} alt="" />
            <img className="" src={telegram} alt="" />
          </div>
          <div className="md:h-1/2 text-center md:text-left flex flex-col justify-between">
            <p className="mb-4 md:mb-0">+7 961 582 02 02</p>
            <p>shadow.sochi@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="mt-0 md:mt-4 border-gray_border mb-9" />
      <div className="container hidden md:visible mx-auto md:flex text-center md:text-left">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p>© ООО “ИНТЕГРОСИСТЕМС”, 2024</p>
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <a href="">Политика конфиденциальности</a>
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <a href="">Условия обслуживания</a>
        </div>
      </div>
      <div className="container flex-col md:hidden mx-auto  text-center md:text-left text-lg">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p>Политика конфиденциальности</p>
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <a href="">Условия обслуживания</a>
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <a href="">© ООО “ИНТЕГРОСИСТЕМС”, 2024</a>
        </div>
      </div>
    </footer>
  );
};
