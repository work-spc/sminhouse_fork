import first from "../../icons/security-systems/Subtract.webp";
import second from "../../icons/security-systems/Subtract-1.webp";
import third from "../../icons/security-systems/Subtract-2.webp";

import "./style.css";

export const SecuritySystems: React.FC = () => {
  return (
    <div className="m-auto mb-20 md:mb-40 flex flex-wrap md:flex-nowrap">
      <div className="w-full">
        <h2 className="md:text-center md:text-5xl text-3xl font-bold mb-6 md:mb-11">
          Современные системы безопасноти
        </h2>
        <div className="flex gap-x-9 flex-wrap lg:flex-nowrap ">
          <div className="security-systems-border">
            <img className="w-full" src={first} alt="" />
            <div className=" flex flex-col px-6 pb-6">
              <p className="font-bold text-2xl mb-6 security-systems-margin-top">
                Imou
              </p>
              <p className="text-xl mb-6">Беспроводная система безопасности</p>

              <a className="text-accent_font text-xl" href="url">
                Подробнее
              </a>
            </div>
          </div>
          <div className="security-systems-border">
            <img className="w-full" src={second} alt="" />
            <div className=" flex flex-col px-6 pb-6">
              <p className="font-bold text-2xl mb-6 security-systems-margin-top">
                Ajax Systems
              </p>
              <p className="text-xl mb-6">
                Интеллектуальные системы видеонаблюдения
              </p>

              <a className="text-accent_font text-xl" href="url">
                Подробнее
              </a>
            </div>
          </div>
          <div className="security-systems-border">
            <img className="w-full" src={third} alt="" />
            <div className=" flex flex-col px-6 pb-6">
              <p className="font-bold text-2xl mb-6 security-systems-margin-top">
                Macroscop
              </p>
              <p className="text-xl mb-6">
                Инновационные решения на рынке IP-видеонаблюдения
              </p>

              <a className="text-accent_font text-xl" href="url">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
