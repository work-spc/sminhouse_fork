import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../icons/navbar/logo.svg";
import button from "../../icons/navbar/button.svg";
import arrow_input from "../../icons/navbar/arrow-input.svg";

import dzen from "../../icons/footer/Yandex_Zen_logo_icon.svg";
import youtube from "../../icons/footer/youtube.svg";
import vk from "../../icons/footer/VK.com-logo.svg";
import telegram from "../../icons/footer/Telegram_2019_Logo 1.svg";
import "./style.css";
import { Button } from "../../components/button/button";

interface MenuItemProps {
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return <button className="">{children}</button>;
};

const MenuItemAnimated: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MenuItem>{children}</MenuItem>
    </motion.li>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="z-30 navbar p-3 lg:pt-6 max-w-1368">
      <div className="z-30 bg-white lg:bg-opacity-80 backdrop-blur-sm m-auto p-4 md:px-11 mdpx-11 md:mb-10 py-5 border rounded-2xl">
        <div className="flex justify-between items-center">
          <button>
            <img src={logo} alt="" />
          </button>
          <div className="hidden lg:flex space-x-4">
            <MenuItem>Решения</MenuItem>
            <MenuItem>Проекты</MenuItem>
            <MenuItem>Партнеры</MenuItem>
            <MenuItem>О нас</MenuItem>
          </div>
          <div className="text-accent_font hidden lg:flex">
            <button className="mr-6">+7(800)800-80-80</button>
            <button
              style={{
                paddingTop: "11px",
                paddingBottom: "11px",
              }}
              className="border-button-half flex px-6 items-center rounded-lg border-accent_border hover:bg-accent_background hover:bg-opacity-10 duration-300"
            >
              <p className="mr-3">Войти</p>
              <img src={arrow_input} alt="" />
            </button>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <img src={button} alt="Menu" />
          </button>
        </div>
        {/* //ddddddddddd */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "75vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="text-lg h-full text-center flex flex-col justify-evenly">
                <MenuItemAnimated>Решения</MenuItemAnimated>
                <MenuItemAnimated>Проекты</MenuItemAnimated>
                <MenuItemAnimated>Партнеры</MenuItemAnimated>
                <MenuItemAnimated>О нас проверка</MenuItemAnimated>
                {/* <div className="mb-14"></div> */}
                <hr className="my-4 border-gray_border border-opacity-40 m-0" />
                <div className="flex gap-2 justify-evenly">
                  <img className="" src={dzen} alt="" />
                  <img className="" src={youtube} alt="" />
                  <img className="" src={vk} alt="" />
                  <img className="" src={telegram} alt="" />
                </div>
                <div className="md:h-1/2  text-center text-base flex flex-col justify-between">
                  <p className="mb-4 md:mb-0">+7 961 582 02 02</p>
                  <p>shadow.sochi@gmail.com</p>
                </div>
                <Button
                  children="Получить консультацию"
                  type="outline"
                ></Button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
