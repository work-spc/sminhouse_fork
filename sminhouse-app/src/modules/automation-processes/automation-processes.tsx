import { MListWithHeader } from "../../components/list-with-header/list-with-header";
import logo from "../../icons/automation-processes/logo.svg";
import { motion } from "framer-motion";
import "./style.css";
import { openModalWindow } from "../../state/chosen-сomponents/is-open-modal-window";
import { useDispatch } from "react-redux";

const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
    duration: 0.5, // Увеличиваем продолжительность анимации
  }),
};

export const AutomationProcesses: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="mb-20 lg:mb-40"
    >
      <div className="lg:text-center mb-6 lg:mb-9 lg:text-5xl text-3xl">
        <motion.h2
          custom={1}
          variants={featureAnimation}
          className="font-bold mb-4 lg:mb-6"
        >
          Автоматизация процессов
        </motion.h2>
        <motion.p
          custom={2}
          variants={featureAnimation}
          className="text-lg lg:text-xl text-light_dark_font lg:w-2/3 lg:m-auto"
        >
          SminHOUSE объединяет различные сервисы в одну инфраструктуру, упрощая
          процессы от передачи показаний счетчиков до управления документами –
          все доступно в один клик.
        </motion.p>
      </div>
      <div className="flex w-full flex-wrap lg:flex-nowrap gap-9">
        <div className="lg:w-3/5 flex flex-wrap gap-y-4 lg:gap-y-9 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="w-full"
          >
            <MListWithHeader
              custom={3}
              variants={featureAnimation}
              title="Широкие возможности"
              items={[
                "Видеонаблюдение",
                "Доступ авто по номеру",
                "Выпуск пропусков",
                "Прием заявок от жильцов и многое другое",
              ]}
            />
          </motion.div>
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.2, once: true }}
            className="flex flex-wrap lg:flex-nowrap gap-y-4 "
          >
            <motion.div
              custom={3.5}
              variants={featureAnimation}
              className="border w-full lg:w-2/5 p-6 lg:p-8 grow rounded-2xl border-gray_border bg-white lg:mr-9"
            >
              <p className="font-bold text-2xl mb-4">Удобный доступ</p>
              <p className="text-light_dark_font text-sm lg:text-lg ">
                Вы можете пользоваться полным функционалом как с компьютера так
                и с мобильного приложения
              </p>
            </motion.div>
            <motion.div
              custom={3.8}
              variants={featureAnimation}
              className="border w-full lg:w-3/5 p-6 lg:p-8 grow rounded-2xl border-gray_border bg-white"
            >
              <p className="font-bold text-2xl mb-4">Система под ключ</p>
              <p className="text-light_dark_font text-sm lg:text-lg ">
                Мы самоcтоятельно поставляем, устанавливаем и настраиваем все
                необходимое оборудование. Полная поддержка по работе системы
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          custom={3}
          variants={featureAnimation}
          className="rounded-2xl pt-48 lg:p-6 w-full lg:w-2/5 background-container flex flex-col justify-end"
        >
          <div
            style={{
              borderRadius: "14px",
            }}
            className="p-5  bg-gray-200 bg-opacity-10 border border-white border-opacity-20 backdrop-blur-lg"
          >
            <div className="flex justify-between text-white gap-x-4">
              <img className="w-11 lg:w-14" src={logo} alt="" />
              <div className="">
                <p>SminHouse Demo</p>
                <p className="font-normal text-sm">
                  <span className="hidden lg:block">
                    Ознакомьтесь со всеми функциями системы уже сейчас
                  </span>
                  <span className="block lg:hidden">
                    Ознакомьтесь со всеми функциями системы
                  </span>
                </p>
              </div>
              <div className="flex align-center">
                <button
                  onClick={() => dispatch(openModalWindow())}
                  className="w-10"
                >
                  <div className="w-10 h-10 button-automation-processes"></div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
