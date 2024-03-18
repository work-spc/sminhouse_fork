import "./style.css";

import { WhiteInput } from "../../components/white-input/white-input";

export const OtherQuestions: React.FC = () => {
  return (
    <div className="m-auto mb-20 md:mb-40 text-left md:text-center row">
      <div className="justify-between flex-wrap md:flex-wrap  z-1 text-left">
        <div className="w-full mb-9 text-center">
          <h2 className="md:text-5xl text-3xl font-bold mb-3">
            Остались вопросы?
          </h2>
          <h3 className=" text-lg md:text-xl mb-9 md:mb-12">
            Получите бесплатную консультацию от наших специалистов
          </h3>
        </div>
        <div className="flex-wrap lg:flex-nowrap gap-6 wrap w-full h-full flex gap-x-6 mb-6 md:mb-9">
          <div className="w-full ">
            <WhiteInput type="text" placeholder="Имя*"></WhiteInput>
          </div>
          <div className="w-full ">
            <WhiteInput type="mail" placeholder="E-mail*"></WhiteInput>
          </div>
          <div className="w-full ">
            <WhiteInput type="tel" placeholder="(___) ___-__-__"></WhiteInput>
          </div>

          <button className="bg-accent_background w-full min-h-14  md:min-h-16 text-white rounded-lg text-lg md:text-xl active:bg-button_click hover:bg-button_hover duration-300">
            Получить консультацию
          </button>
        </div>
        <p className="block  text-center text-privacy_policy text-sm md:text-lg">
          Продолжив, вы соглашаетесь с<span> </span>
          <a className="underline" href="">
            политикой конфиденциальности
          </a>
          <span> </span>
          ООО “ИНТЕГРОСИСТЕМС”
        </p>
      </div>
    </div>
  );
};
