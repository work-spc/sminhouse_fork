import { motion } from "framer-motion";
import phone from "../../icons/ready-made-solutions/phone.png";
import background from "../../icons/ready-made-solutions/background.svg";
import { MReadySolutionsItem } from "../../components/ready-solutions-item/ready-solutions-item";
import "./style.css";

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
const animationAbsolute = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: -430,
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

export const ReadyMadeSolutions: React.FC = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className=" flex relative flex-wrap md:flex-nowrap justify-center items-center gap-x-16 gap-y-12 mb-20 md:mb-40"
    >
      <motion.div
        custom={1}
        variants={animation}
        className="relative w-full md:hidden background-ready"
      >
        <img
          className="relative w-56 md:w-auto m-auto z-10"
          src={phone}
          alt=""
        />
      </motion.div>
      {/* wihvgi0jb */}
      <motion.img
        custom={1}
        variants={animation}
        className="filter-drop-shadow-solutions relative hidden md:block z-10 w-56 md:w-2/6 custom-shadow"
        src={phone}
        alt=""
      />

      <motion.img
        custom={1}
        variants={animationAbsolute}
        className="z-0 absolute hidden md:block md:left-[-45%] lg:left-[-30%] xl:left-[-20%] rotate"
        src={background}
        alt=""
      />

      <motion.div
        custom={isMobile ? 2 : 1}
        variants={isMobile ? animation : animationRight}
        className="w-full z-10"
      >
        <h2
          id="decisions"
          className="md:text-center md:text-5xl text-3xl font-bold mb-6 md:mb-9"
        >
          Готовые решения
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-y-4 gap-x-9">
          <MReadySolutionsItem
            title="Застройщикам и управляющим компаниям"
            className="24"
            items={[
              "Повысьте престиж ваших домов, чтобы клиенты выбрали именно вас",
              "Управляйте оплатой и контролируйте дебеторские задолженноси",
              "Увеличьте прибыль за счет роста класса объекта",
              "Ведите учет рабочего времени сотрудников и управляйте",
              "Повысьте лояльность своих жильцов",
              "Ограничьте посещение служебных помещений",
            ]}
          />
          <MReadySolutionsItem
            title="Агенствам недвижимости и собственникам"
            className="24"
            items={[
              "Контролируйте посещение ваших объектов через систему умных пропусков",
              "Обеспечьте безопасность от протечек, пожара или кражи",
              "Экономьте время на управление всеми вашими объектами",
              "Сократите расходы на обслуживание",
              "Увеличьте прибыль за счет уникального предложения жильца",
            ]}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
