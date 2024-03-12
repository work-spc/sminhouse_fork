import settings from "../../icons/our-process/settings.svg";
import background from "../../icons/our-process/background.png";
import "./style.css";

export const OurProcess: React.FC = () => {
  return (
    <div className="relative mb-14 md:mb-40 flex flex-col md:flex-row">
      <div className="hidden md:block md:relative md:w-1/2">
        <div className="absolute pl-8 pt-9">
          <h2 className=" md:text-white md:text-5xl text-3xl font-bold mb-6 md:mb-6">
            Готовые решения
          </h2>
          <p className="text-xl text-light_dark_font md:text-white  ">
            Комплексный и системный подход
          </p>
        </div>

        <img className="w-full hidden md:block" src={background} alt="" />
        <div className="our_process md:absolute  bottom-0 right-0 border  p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between ">
          <div className="flex">
            <img
              className="mr-4 md:mr-2 lg:mr-4 md:w-10  lg:w-auto img-our-process"
              src={settings}
              alt=""
            />
            <p className="font-bold text-2xl md:text-lg lg:text-lg xl:text-2xl">
              Настройка системы
            </p>
          </div>

          <p className="text-light_dark_font text-sm xl:text-lg">
            Мы связываемся с вами и определяем решение под ваш объект.
            Составляем коммерческое предложение.
          </p>
        </div>
      </div>
      <div className="md:hidden mb-8">
        <h2 className=" md:text-white md:text-5xl text-3xl font-bold mb-1">
          Как мы работаем
        </h2>
        <p className="text-xl text-light_dark_font md:text-white  ">
          Комплексный и системный подход
        </p>
      </div>
      <div className="flex md:pl-8 md:w-1/2  ">
        <div className="md:grid md:grid-cols-2 gap-6">
          <SystemSetupCard></SystemSetupCard>
          <SystemSetupCard></SystemSetupCard>
          <SystemSetupCard></SystemSetupCard>
          <SystemSetupCard></SystemSetupCard>
        </div>
      </div>
    </div>
  );
};

const SystemSetupCard = () => {
  return (
    <div className="border mb-4 md:mb-0 w-full p-5 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
      <div className="flex items-center mb-9 md:m-0">
        <img
          className="mr-4 md:mr-2 lg:mr-4 md:w-10  lg:w-auto"
          src={settings}
          alt=""
        />
        <p className="font-bold text-2xl md:text-lg lg:text-lg xl:text-2xl">
          Настройка системы
        </p>
      </div>
      <p className="text-light_dark_font text-sm xl:text-lg">
        Мы связываемся с вами и определяем решение под ваш объект. Составляем
        коммерческое предложение.
      </p>
    </div>
  );
};
