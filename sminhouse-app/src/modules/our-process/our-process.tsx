import { motion } from "framer-motion";
import settings from "../../icons/our-process/settings.svg";
import second from "../../icons/our-process/choose.svg";
import third from "../../icons/our-process/wrench-alt.svg";
import fourth from "../../icons/our-process/user-headset.svg";
import background from "../../icons/our-process/background.png";
import "./style.css";
import { forwardRef } from "react";

const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
    duration: 0.5, // Увеличиваем продолжительность анимации
  }),
};

const animationRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
    duration: 0.5, // Увеличиваем продолжительность анимации
  }),
};

export const OurProcess: React.FC = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="about_us"
      className="relative mb-14 md:mb-40 flex flex-col md:flex-row"
    >
      <motion.div
        custom={1}
        variants={animation}
        className="hidden md:block md:relative md:w-1/2"
      >
        <div className="absolute pl-8 pt-9">
          <h2 className=" md:text-white md:text-5xl text-3xl font-bold mb-6 md:mb-2">
            Как мы работаем
          </h2>
          <p className="text-xl text-light_dark_font md:text-white  ">
            Комплексный и системный подход
          </p>
        </div>

        <img className="w-full hidden md:block" src={background} alt="" />
        <div className="our_process md:absolute  bottom-0 right-0 border  p-6 md:p-2 lg:p-3 xl:px-6 xl:py-8 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between ">
          <div className="flex items-center mb-9 md:m-0">
            <img
              className="bg-dark_background mr-4 md:mr-1 lg:mr-2 w-14 md:w-8 lg:w-15 xl:w-16 lg:p-1 xl:p-4 rounded-xl"
              src={settings}
              alt=""
            />
            <p className="font-bold text-2xl md:text-lg lg:text-lg xl:text-2xl">
              Настройка системы
            </p>
          </div>

          <p className="text-light_dark_font text-sm xl:text-xl">
            Запускаем систему и 24 часа в сутки наше предложение будет
            обеспечивать для вас контроль всех систем дома.
          </p>
        </div>
      </motion.div>
      <motion.div custom={0} variants={animation} className="md:hidden mb-6">
        <h2 className=" md:text-white md:text-5xl text-3xl font-bold mb-1">
          Как мы работаем
        </h2>
        <p className="text-xl text-light_dark_font md:text-white  ">
          Комплексный и системный подход
        </p>
      </motion.div>
      <div className="flex md:pl-8 md:w-1/2  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="md:grid md:grid-cols-2 gap-6"
        >
          <MSystemSetupCard
            custom={1}
            variants={isMobile ? animation : animationRight}
            title="Выбор решения"
            text="Мы связываемся с вами и определяем решение под ваш объект. Составляем коммерческое предложение."
            image={second}
          ></MSystemSetupCard>
          <MSystemSetupCard
            custom={1}
            variants={isMobile ? animation : animationRight}
            title="Установка оборудования"
            text="В удобное время производим монтаж оборудования и обучаем работе с ним. Подписываем договор."
            image={third}
          ></MSystemSetupCard>
          <div className="block md:hidden">
            <MSystemSetupCard
              custom={1}
              variants={isMobile ? animation : animationRight}
              title="Настройка системы"
              text="Запускаем систему и 24 часа в сутки наше предложение будет обеспечивать для вас контроль всех систем дома."
              image={settings}
            ></MSystemSetupCard>
          </div>

          <MSystemSetupCard
            custom={isMobile ? 1 : 1}
            variants={isMobile ? animation : animationRight}
            title="Поддержка"
            text="Техническая поддержка оборудования и модулей системы входит в стоимость."
            image={fourth}
          ></MSystemSetupCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface SystemSetupCardProps {
  title: string;
  text: string;
  image: string;
}

const SystemSetupCard = forwardRef<HTMLDivElement, SystemSetupCardProps>(
  ({ title, text, image }, ref) => {
    return (
      <div
        ref={ref}
        className="border min-h-64 mb-4 md:mb-0 w-full p-6 md:p-2 lg:p-3 xl:px-6 xl:py-8 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between"
      >
        <div className="flex items-center mb-9 md:m-0">
          <img
            className="bg-dark_background mr-4 md:mr-1 lg:mr-2 w-14 md:w-8 lg:w-15 xl:w-16 p-4 md:p-1 lg:p-2 xl:p-4 rounded-xl"
            src={image}
            alt=""
          />
          <p className="font-bold text-2xl md:text-lg lg:text-lg xl:text-2xl">
            {title}
          </p>
        </div>
        <p className="text-light_dark_font text-lg xl:text-xl">{text}</p>
      </div>
    );
  }
);

export const MSystemSetupCard = motion(SystemSetupCard);
