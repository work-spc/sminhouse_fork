import { useEffect, useState } from "react";
import { ListWithHeader } from "../../components/list-with-header/list-with-header";
import settings from "../../icons/our-process/settings.svg";
import background from "../../icons/our-process/background.png";
import "./style.css";

export const OurProcess: React.FC = () => {
  return (
    <div className="relative mb-14 md:mb-40 flex">
      <div className="hidden md:block md:relative md:w-1/2">
        <img className="w-full hidden md:block" src={background} alt="" />
        <div className="our_process md:absolute  bottom-0 right-0 border  p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between ">
          <div className="flex">
            <img className="mr-4" src={settings} alt="" />
            <p className="font-bold text-2xl ">Настройка системы</p>
          </div>

          <p className="text-light_dark_font text-sm md:text-lg ">
            Запускаем систему и 24 часа в сутки наше предложение будет
            обеспечивать для вас контроль всех систем дома.
          </p>
        </div>
      </div>
      <div className="flex md:pl-8 md:w-1/2">
        <div className="md:grid md:grid-cols-2 gap-6">
          <div className="border mb-4 w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center mb-9 md:m-0">
              <img className="mr-4" src={settings} alt="" />
              <p className="font-bold text-2xl">Настройка системы</p>
            </div>
            <p className="text-light_dark_font text-sm md:text-lg">
              Мы связываемся с вами и определяем решение под ваш объект.
              Составляем коммерческое предложение.
            </p>
          </div>
          <div className="border mb-4 w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center mb-9 md:m-0">
              <img className="mr-4" src={settings} alt="" />
              <p className="font-bold text-2xl">Настройка системы</p>
            </div>
            <p className="text-light_dark_font text-sm md:text-lg">
              Мы связываемся с вами и определяем решение под ваш объект.
              Составляем коммерческое предложение.
            </p>
          </div>
          <div className="border mb-4 w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center mb-9 md:m-0">
              <img className="mr-4" src={settings} alt="" />
              <p className="font-bold text-2xl">Настройка системы</p>
            </div>
            <p className="text-light_dark_font text-sm md:text-lg">
              Мы связываемся с вами и определяем решение под ваш объект.
              Составляем коммерческое предложение.
            </p>
          </div>

          <div className="border mb-4 w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center mb-9 md:m-0">
              <img className="mr-4" src={settings} alt="" />
              <p className="font-bold text-2xl">Настройка системы</p>
            </div>
            <p className="text-light_dark_font text-sm md:text-lg">
              Мы связываемся с вами и определяем решение под ваш объект.
              Составляем коммерческое предложение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
