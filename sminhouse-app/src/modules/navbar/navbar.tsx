import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../icons/navbar/logo.svg";
import button from "../../icons/navbar/button.svg";
import arrow_input from "../../icons/navbar/arrow-input.svg";
import "./style.css";

interface MenuItemProps {
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <button className="border border-transparent hover:border-accent_border focus:outline-none rounded-lg py-2 px-4 hover:text-accent_font transition-colors duration-300 bg-transparent hover:bg-transparent">
      {children}
    </button>
  );
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
    <div className="z-30 navbar h-screen p-3 md:pt-6 max-w-1368">
      <motion.div
        className="z-30 bg-white bg-opacity-80 backdrop-blur-sm m-auto p-4 md:px-11 mdpx-11 md:mb-10 py-5 border rounded-2xl"
        initial={{ width: "auto" }}
        animate={{ height: isOpen ? "100%" : "auto" }}
        transition={{ duration: 0.3 }}
      >
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
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="p-4">
                <MenuItemAnimated>Menu Item 1</MenuItemAnimated>
                <MenuItemAnimated>Menu Item 2</MenuItemAnimated>
                <MenuItemAnimated>Menu Item 3</MenuItemAnimated>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
