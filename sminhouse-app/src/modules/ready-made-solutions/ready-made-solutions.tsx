import { useEffect, useState } from "react";

import phone from "../../icons/ready-made-solutions/phone.png";
import background from "../../icons/ready-made-solutions/background.svg";
import { ReadySolutionsItem } from "../../components/ready-solutions-item/ready-solutions-item";
// import "./style.css";

export const ReadyMadeSolutions: React.FC = () => {
  return (
    <div className=" flex flex-wrap md:flex-nowrap justify-center items-center gap-x-16 gap-y-12 mb-20 md:mb-40">
      <div className="relative w-full md:hidden background-ready">
        <img className=" w-56 md:w-auto m-auto z-10" src={phone} alt="" />
      </div>
      <img
        className="relative hidden md:block z-10 w-56 md:w-2/6"
        src={phone}
        alt=""
      />
      <img
        className="z-0 absolute hidden md:block  md:-translate-y-0 md:-translate-x-1/2 "
        src={background}
        alt=""
      />

      <div className="w-full z-10">
        <h2 className="md:text-center md:text-5xl text-3xl font-bold mb-6 md:mb-9">
          Готовые решения
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-y-4 gap-x-9">
          <ReadySolutionsItem
            title="Застройщикам и управляющим компаниям"
            items={[
              "Повысьте престиж ваших домов, чтобы клиенты выбрали именно вас",
              "Управляйте оплатой и контролируйте дебеторские задолженноси",
              "Увеличьте прибыль за счет роста класса объекта",
              "Ведите учет рабочего времени сотрудников и управляйте",
              "Повысьте лояльность своих жильцов",
              "Ограничьте посещение служебных помещений",
            ]}
          />
          <ReadySolutionsItem
            title="Агенствам недвижимости и собственникам"
            items={[
              "Контролируйте посещение ваших объектов через систему умных пропусков",
              "Обеспечьте безопасность от протечек, пожара или кражи",
              "Экономьте время на управление всеми вашими объектами",
              "Сократите расходы на обслуживание",
              "Увеличьте прибыль за счет уникального предложения жильца",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
