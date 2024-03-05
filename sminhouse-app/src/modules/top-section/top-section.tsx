import { useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { SwiperMain } from "../../components/swiper/swiper";
export const TopSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-1368 m-auto flex md:flex-nowrap flex-wrap gap-x-9 ">
      <div className="w-full md:w-3/5">
        <h1 className="font-bold pt-6 md:text-6xl text-4xl">
          Универсальная система контроля недвижимости «под ключ»
        </h1>
        <h2 className="pt-6 md:w-2/3 text-xl mb-11 text-light_dark_font">
          Управляйте недвижимостью удобно и эффективно вместе со Sminhouse
        </h2>
        <div className="flex gap-x-6 mb-24 flex-wrap md:flex-nowrap">
          <div className="mb-3 md:m-0 w-full">
            <Button children="Скачать презентацию"></Button>
          </div>
          <div className="mb-3 md:m-0 w-full">
            <Button children="Получить демо-версию" type="outline"></Button>
          </div>
        </div>
        {isMobile ? (
          <div></div>
        ) : (
          <div>
            <div className="flex gap-x-9">
              <div className="w-1/2 border p-5 grow rounded-2xl border-gray_border ">
                <p className="font-bold text-4xl text-light_accent_font">
                  с 2010 года
                </p>
                <p className="text-light_dark_font">занимаемся интеграцией</p>
              </div>

              <div className="w-1/2 border p-5 grow rounded-2xl border-gray_border ">
                <p className="font-bold text-4xl text-light_accent_font">
                  4 000+
                </p>
                <p className="text-light_dark_font">
                  квартир подключили наши инженеры
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <SwiperMain></SwiperMain>
      {isMobile ? (
        <div>
          <div className="flex gap-x-9">
            <div className="w-1/2 border p-5 grow rounded-2xl border-gray_border ">
              <p className="font-bold text-4xl text-light_accent_font">
                с 2010 года
              </p>
              <p className="text-light_dark_font">занимаемся интеграцией</p>
            </div>

            <div className="w-1/2 border p-5 grow rounded-2xl border-gray_border ">
              <p className="font-bold text-4xl text-light_accent_font">
                4 000+
              </p>
              <p className="text-light_dark_font">
                квартир подключили наши инженеры
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
