import "./style.css";

import InputBestSolution from "../../components/best-solution-input/best-solution-input";

// import background from "../../icons/best-solution/background.svg";

export const BestSolution: React.FC = () => {
  return (
    <div
      className="m-auto mb-20 md:mb-40 text-left md:text-center background-best-solutions row rounded-2xl "
      style={{
        marginRight: "-20px",
        marginLeft: "-20px",
      }}
    >
      <div className="relative background-img-best-solutions md:px-11 md:py-14 px-5 py-11">
        <h2 className="md:text-center text-white md:text-5xl text-3xl font-bold mb-2 md:mb-3">
          Подберем лучшее решение для вас
        </h2>
        <h3 className="text-white text-lg md:text-xl  mb-9 ">
          Закажите индивидуальное решение и наш менеджер свяжется с вами в
          ближайшее время
        </h3>
        <div className="flex gap-6 flex-wrap md:flex-nowrap mb-6 md:mb-9">
          <InputBestSolution type="text" placeholder="Имя*"></InputBestSolution>
          <InputBestSolution
            type="mail"
            placeholder="E-mail*"
          ></InputBestSolution>
          <InputBestSolution
            type="tel"
            placeholder="(___) ___-__-__"
          ></InputBestSolution>
          <button
            className="w-full min-h-14 md:h-16 md:w-1/4  text-white   md:py-5 rounded-lg text-lg md:text-xl bg-accent_background active:bg-button_click hover:bg-button_hover duration-300"
            // onClick={onClick}
          >
            <div className="text-lg md:text-xl " style={{}}>
              Подобрать решение
            </div>
          </button>
          {/* <img src={background} className="absolute top-[50%] z-30" alt="" /> */}
        </div>
        <h3 className="text-center text-privacy_policy text-sm md:text-lg">
          Продолжив, вы соглашаетесь с<span> </span>
          <a className="underline" href="">
            политикой конфиденциальности
          </a>
          <span> </span>
          ООО “ИНТЕГРОСИСТЕМС”
        </h3>
      </div>
    </div>
  );
};
