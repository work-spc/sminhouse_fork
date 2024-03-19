import logo from "../../icons/navbar/logo.svg";
import button from "../../icons/navbar/button.svg";
import arrow_input from "../../icons/navbar/arrow-input.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="relative">
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <img src={button} alt="Menu" />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute top-12 right-0 bg-white shadow-md rounded-lg p-4"
              >
                {/* Your menu items go here */}
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
