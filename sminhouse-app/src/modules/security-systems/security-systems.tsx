import union from "../../icons/security-systems/union.svg";

import first from "../../icons/security-systems/Subtract.png";
import second from "../../icons/security-systems/Subtract-1.png";
import third from "../../icons/security-systems/Subtract-2.png";

import "./style.css";

export const SecuritySystems: React.FC = () => {
  return (
    <div className="m-auto mb-20 md:mb-40 flex flex-wrap md:flex-nowrap">
      <div className="w-full">
        <h2 className="md:text-centermd:text-5xl text-3xl font-bold mb-6 md:mb-9">
          Современные системы безопасноти
        </h2>
        <div className="flex gap-x-9 flex-wrap lg:flex-nowrap">
          <div className="">
            <img className="security-translate-down" src={first} alt="" />
            <div className="background-security-systems flex flex-col">
              <div className="security-pading">
                <p className="font-bold text-xl mb-4">Imou</p>
              </div>
              <p className="security-pading-h">
                Беспроводная система безопасности
              </p>
              <div className="grow"></div>
              <a className=" text-accent_font security-pading" href="url">
                Подробнее
              </a>
              <img
                className="w-full security-translate security-translate "
                src={union}
                alt=""
              />
            </div>
          </div>
          <div className="relative security-margin">
            <img className="relative translate-y-6" src={second} alt="" />
            <div className="background-security-systems">
              <div className="security-pading">
                <p className="font-bold text-xl mb-4">Imou</p>
              </div>
              <p className="security-pading">
                Беспроводная система безопасности
              </p>
              <a className="security-pading" href="url">
                Подробнее
              </a>
              <img
                className="w-full opacity-0 security-translate"
                src={union}
                alt=""
              />
            </div>
          </div>
          <div className="relative security-margin">
            <img className="relative translate-y-6" src={third} alt="" />
            <div className="background-security-systems">
              <div className="security-pading">
                <p className="font-bold text-xl mb-4">Imou</p>
              </div>
              <p className="security-pading">
                Беспроводная система безопасности
              </p>
              <a className="security-pading" href="url">
                Подробнее
              </a>
              <img
                className="w-full opacity-0 security-translate"
                src={union}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
