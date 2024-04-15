import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../icons/navbar/logo.svg";
import button from "../../icons/navbar/button.svg";
import button_close from "../../icons/navbar/button-close.svg";
import arrow_input from "../../icons/navbar/arrow-input.svg";

import dzen from "../../icons/footer/Yandex_Zen_logo_icon.svg";
import youtube from "../../icons/footer/youtube.svg";
import vk from "../../icons/footer/VK.com-logo.svg";
import telegram from "../../icons/footer/Telegram_2019_Logo 1.svg";
import "./style.css";
import { Button } from "../../components/button/button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    const url = "https://my.sminhouse.ru/login";
    window.location.assign(url);
  };

  return (
    <div id="navbar" className="navbar p-3 lg:pt-6 max-w-1368">
      <div className="z-30 bg-white lg:bg-opacity-80 backdrop-blur-sm m-auto p-4 md:px-11  py-5 border rounded-2xl">
        <div className="flex justify-between items-center">
          <button>
            <img src={logo} alt="" />
          </button>
          <div className="hidden lg:flex space-x-4">
            <button
              className="btn"
              onClick={() => {
                const element = document.getElementById("decisions");
                const navbar = document.getElementById("navbar");
                if (element && navbar) {
                  const navbarHeight = navbar.offsetHeight; // Получаем высоту навбара
                  const elementTop =
                    element.getBoundingClientRect().top + window.pageYOffset; // Получаем позицию верхней границы элемента относительно видимой части окна
                  window.scrollTo({
                    top: elementTop - navbarHeight, // Прокручиваем до позиции элемента минус высота навбара
                    behavior: "smooth",
                  });
                }
              }}
            >
              Решения
            </button>

            <button
              className="btn"
              onClick={() => {
                const element = document.getElementById("projects");
                const navbar = document.getElementById("navbar");
                if (element && navbar) {
                  const navbarHeight = navbar.offsetHeight; // Получаем высоту навбара
                  const elementTop =
                    element.getBoundingClientRect().top + window.pageYOffset; // Получаем позицию верхней границы элемента относительно видимой части окна
                  window.scrollTo({
                    top: elementTop - navbarHeight, // Прокручиваем до позиции элемента минус высота навбара
                    behavior: "smooth",
                  });
                }
              }}
            >
              Проекты
            </button>
            <button
              className="btn"
              onClick={() => {
                const element = document.getElementById("partners");
                const navbar = document.getElementById("navbar");
                if (element && navbar) {
                  const navbarHeight = navbar.offsetHeight; // Получаем высоту навбара
                  const elementTop =
                    element.getBoundingClientRect().top +
                    window.pageYOffset -
                    70; // Получаем позицию верхней границы элемента относительно видимой части окна
                  window.scrollTo({
                    top: elementTop - navbarHeight, // Прокручиваем до позиции элемента минус высота навбара
                    behavior: "smooth",
                  });
                }
              }}
            >
              Партнеры
            </button>
            <button
              className="btn"
              onClick={() => {
                const element = document.getElementById("about_us");
                const navbar = document.getElementById("navbar");
                if (element && navbar) {
                  const navbarHeight = navbar.offsetHeight; // Получаем высоту навбара
                  const elementTop =
                    element.getBoundingClientRect().top + window.pageYOffset; // Получаем позицию верхней границы элемента относительно видимой части окна
                  window.scrollTo({
                    top: elementTop - navbarHeight, // Прокручиваем до позиции элемента минус высота навбара
                    behavior: "smooth",
                  });
                }
              }}
            >
              О нас
            </button>
          </div>
          <div className="text-accent_font hidden lg:flex">
            <button className="mr-6">+7(800)800-80-80</button>
            <button
              style={{
                paddingTop: "11px",
                paddingBottom: "11px",
              }}
              className="border-button-half flex px-6 items-center rounded-lg border-accent_border hover:bg-accent_background hover:bg-opacity-10 duration-300"
              onClick={handleButtonClick} // Добавляем обработчик события onClick
            >
              <p className="mr-3">Войти</p>
              {/* Предполагается, что arrow_input - это путь к изображению стрелки */}
              <img src={arrow_input} alt="" />
            </button>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? (
              <img
                src={button_close}
                alt=""
                className={`focus:outline-none transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            ) : (
              <img
                src={button}
                alt=""
                className={`focus:outline-none transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
        </div>
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
                <button
                  className="btn"
                  onClick={() => {
                    const element = document.getElementById("decisions");
                    const navbar = document.getElementById("navbar");
                    if (element && navbar) {
                      const navbarHeight = 82; // Получаем высоту навбара
                      const elementRect = element.getBoundingClientRect();
                      const elementTop = elementRect.top + window.scrollY;
                      window.scrollTo({
                        top: elementTop - navbarHeight - elementRect.height,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Решения
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    const element = document.getElementById("projects");
                    const navbar = document.getElementById("navbar");
                    if (element && navbar) {
                      const navbarHeight = 82; // Получаем высоту навбара
                      const elementRect = element.getBoundingClientRect();
                      const elementTop = elementRect.top + window.scrollY;
                      window.scrollTo({
                        top:
                          elementTop - navbarHeight - elementRect.height + 30,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Проекты
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    const element = document.getElementById("partners");
                    const navbar = document.getElementById("navbar");
                    if (element && navbar) {
                      const navbarHeight = 82; // Получаем высоту навбара
                      const elementRect = element.getBoundingClientRect();
                      const elementTop = elementRect.top + window.scrollY;
                      window.scrollTo({
                        top:
                          elementTop - navbarHeight - elementRect.height - 50,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Партнеры
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    const element = document.getElementById("about_us");
                    if (element) {
                      const offset = 100; // Количество пикселей, на которые вы хотите прокрутить выше элемента
                      const elementTop =
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        offset;
                      window.scrollTo({
                        top: elementTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Решения
                </button>

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
                  <p>info@sminhouse.ru</p>
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
