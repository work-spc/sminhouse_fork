import settings from "../../icons/our-process/settings.svg";
import second from "../../icons/our-process/second.svg";
import third from "../../icons/our-process/third.svg";
import fourth from "../../icons/our-process/fourth.svg";
import background from "../../icons/our-process/background.png";
import "./style.css";

export const OurProcess: React.FC = () => {
  return (
    <div className="relative mb-14 md:mb-40 flex flex-col md:flex-row">
      <div className="hidden md:block md:relative md:w-1/2">
        <div className="absolute pl-8 pt-9">
          <h2 className=" md:text-white md:text-5xl text-3xl font-bold mb-6 md:mb-2">
            Как мы работаем
          </h2>
          <p className="text-xl text-light_dark_font md:text-white  ">
            Комплексный и системный подход
          </p>
        </div>

        <img className="w-full hidden md:block" src={background} alt="" />
        <div className="our_process md:absolute  bottom-0 right-0 border  p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between ">
          <div className="flex">
            <img
              className="mr-4 md:mr-1 lg:mr-2 md:w-8 lg:w-15 xl:w-auto img-our-process"
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
      </div>
      <div className="md:hidden mb-6">
        <h2 className=" md:text-white md:text-5xl text-3xl font-bold mb-1">
          Как мы работаем
        </h2>
        <p className="text-xl text-light_dark_font md:text-white  ">
          Комплексный и системный подход
        </p>
      </div>
      <div className="flex md:pl-8 md:w-1/2  ">
        <div className="md:grid md:grid-cols-2 gap-6">
          <SystemSetupCard
            title="Выбор решения"
            text="Мы связываемся с вами и определяем решение под ваш объект. Составляем коммерческое предложение."
            image={second}
          ></SystemSetupCard>
          <SystemSetupCard
            title="Установка оборудования"
            text="В удобное время производим монтаж оборудования и обучаем работе с ним. Подписываем договор."
            image={third}
          ></SystemSetupCard>
          <div className="block md:hidden">
            <SystemSetupCard
              title="Настройка системы"
              text="Запускаем систему и 24 часа в сутки наше предложение будет обеспечивать для вас контроль всех систем дома."
              image={settings}
            ></SystemSetupCard>
          </div>

          <SystemSetupCard
            title="Поддержка"
            text="Техническая поддержка оборудования и модулей системы входит в стоимость."
            image={fourth}
          ></SystemSetupCard>
        </div>
      </div>
    </div>
  );
};

interface SystemSetupCardProps {
  title: string;
  text: string;
  image: string;
}

const SystemSetupCard: React.FC<SystemSetupCardProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <div className="border min-h-64 mb-4 md:mb-0 w-full p-6 md:p-2 lg:p-3 xl:px-6 xl:py-8 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
      <div className="flex items-center mb-9 md:m-0">
        <img
          className="mr-4 md:mr-1 lg:mr-2 md:w-8 lg:w-15 xl:w-auto"
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
};
