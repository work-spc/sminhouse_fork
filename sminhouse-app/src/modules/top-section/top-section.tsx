import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/button/button";
import { SwiperMain } from "../../components/swiper/swiper";
import "./style.css";
import { useDispatch } from "react-redux";
import { openModalWindow } from "../../state/chosen-сomponents/is-open-modal-window";
import { DownloadButton } from "../../components/download-button/download-button";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2, // Увеличиваем задержку появления блока
      duration: 0.5, // Увеличиваем продолжительность анимации
    },
  }),
};

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
  const dispatch = useDispatch();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="m-auto mb-20 md:mt-28 md:mb-40 pt-28 md:pt-0 flex md:flex-nowrap flex-wrap gap-x-9 "
    >
      <div className="w-full flex flex-col z-10 md:w-3/5">
        <motion.h1
          custom={1}
          variants={textAnimation}
          className="font-bold pt-6 md:text-6xl text-4xl mb-11 md:mb-0"
        >
          <span className="paragraph_h1">Универсальная система</span>
          <span className="paragraph2_h1">Универсальная</span>
          <br />
          <span className="paragraph2_h1">система</span> контроля недвижимости
          «под ключ»
        </motion.h1>
        <motion.h2
          custom={2}
          variants={textAnimation}
          className="pt-6 hidden md:block  md:w-2/3 text-xl mb-11 text-light_dark_font"
        >
          Управляйте недвижимостью удобно и эффективно вместе со Sminhouse
        </motion.h2>
        <div className="flex gap-x-6 mb-11 text-lg flex-wrap md:flex-nowrap">
          <div className="w-full md:w-auto mb-3 md:m-0 ">
            <DownloadButton></DownloadButton>
          </div>
          <div
            onClick={() => dispatch(openModalWindow())}
            className="w-full h-full md:w-auto md:m-0 "
          >
            <Button children="Получить демо-версию" type="outline"></Button>
          </div>
        </div>
        <div className="flex-grow"></div>
        {isMobile ? (
          <div></div>
        ) : (
          <div>
            <div className="flex gap-x-9">
              <div className="w-1/2 border p-5 grow rounded-2xl bg-white border-gray_border ">
                <p className="font-bold mb-2  md:text-4xl  text-accent_font">
                  <span className="text-3xl">c </span>2010
                  <span className="text-3xl"> года</span>
                </p>
                <p className="text-light_dark_font">занимаемся интеграцией</p>
              </div>

              <div className="w-1/2 border p-5 grow rounded-2xl bg-white border-gray_border ">
                <p className="font-bold mb-2 text-4xl  text-accent_font">
                  4 000 +
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
        <div className="flex w-full z-10 gap-y-4 mt-9 flex-wrap text-center">
          <div className="w-full border p-5 grow rounded-2xl bg-white border-gray_border ">
            <p className="font-bold text-28px  text-accent_font">
              <span className="text-22px">c </span>2010
              <span className="text-22px"> года</span>
            </p>
            <p className="text-light_dark_font text-sm">
              занимаемся интеграцией
            </p>
          </div>

          <div className="w-full border p-5 grow rounded-2xl bg-white border-gray_border ">
            <p className="font-bold mb-2 text-28px  text-accent_font">
              4 000 +
            </p>
            <p className="text-light_dark_font text-sm">
              квартир подключили наши инженеры
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};
