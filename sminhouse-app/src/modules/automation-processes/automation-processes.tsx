import { ListWithHeader } from "../../components/list-with-header/list-with-header";
import logo from "../../icons/automation-processes/logo.svg";
import button from "../../icons/automation-processes/round-button.svg";
import "./style.css";

export const AutomationProcesses: React.FC = () => {
  return (
    <div className="mb-20 lg:mb-40">
      <div className="lg:text-center mb-6 lg:mb-9 lg:text-5xl text-3xl">
        <h2 className="font-bold mb-4 lg:mb-6">Автоматизация процессов</h2>
        <p className="text-lg lg:text-xl text-light_dark_font lg:w-2/3 lg:m-auto">
          SminHOUSE объединяет различные сервисы в одну инфраструктуру, упрощая
          процессы от передачи показаний счетчиков до управления документами –
          все доступно в один клик.
        </p>
      </div>
      <div className="flex w-full flex-wrap lg:flex-nowrap gap-9">
        {/* <div className="bg-gray-500 h-36 w-1/2"></div> */}
        <div className="lg:w-3/5 flex flex-wrap gap-y-4 lg:gap-y-9 ">
          <div className="w-full">
            <ListWithHeader
              title="Широкие возможности"
              items={[
                "Видеонаблюдение",
                "Доступ авто по номеру",
                "Выпуск пропусков",
                "Прием заявок от жильцов и многое другое",
              ]}
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-y-4 ">
            <div className="border w-full lg:w-2/5 p-6 lg:p-8 grow rounded-2xl border-gray_border bg-white lg:mr-9">
              <p className="font-bold text-2xl mb-4">Удобный доступ</p>
              <p className="text-light_dark_font text-sm lg:text-lg ">
                Вы можете пользоваться полным функционалом как с компьютера так
                и с мобильного приложения
              </p>
            </div>
            <div className="border w-full lg:w-3/5 p-6 lg:p-8 grow rounded-2xl border-gray_border bg-white">
              <p className="font-bold text-2xl mb-4">Система под ключ</p>
              <p className="text-light_dark_font text-sm lg:text-lg ">
                Мы самоcтоятельно поставляем, устанавливаем и настраиваем все
                необходимое оборудование. Полная поддержка по работе системы
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl pt-48 lg:p-6 w-full lg:w-2/5 background-container flex flex-col justify-end">
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
              <img className="w-10" src={button} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
