import { useEffect, useState } from "react";
import { ListWithHeader } from "../../components/list-with-header/list-with-header";
import settings from "../../icons/our-process/settings.svg";
import backdrop from "../../icons/our-process/background.png";
import "./style.css";

export const OurProcess: React.FC = () => {
  return (
    <div className="relative mb-40 flex">
      <div className="relative w-1/2">
        <img className="w-full" src={backdrop} alt="" />
        <div className="our_process absolute  bottom-0 right-0 border  p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between ">
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
      <div className="flex pl-8 w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center">
              <img className="mr-4" src={settings} alt="" />
              <p className="font-bold text-2xl">Настройка системы</p>
            </div>
            <p className="text-light_dark_font text-sm md:text-lg">
              Мы связываемся с вами и определяем решение под ваш объект.
              Составляем коммерческое предложение.
            </p>
          </div>
          <div className="border w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center">
              <img className="mr-4" src={settings} alt="" />
              <p className="font-bold text-2xl">Настройка системы</p>
            </div>
            <p className="text-light_dark_font text-sm md:text-lg">
              Мы связываемся с вами и определяем решение под ваш объект.
              Составляем коммерческое предложение.
            </p>
          </div>

          <div className="border w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
            <div className="flex items-center">
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
