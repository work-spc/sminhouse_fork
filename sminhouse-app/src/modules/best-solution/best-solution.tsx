import "./style.css";

import InputBestSolution from "../../components/best-solution-input/best-solution-input";
import { Button } from "../../components/button/button";

export const BestSolution: React.FC = () => {
  return (
    <div className="m-auto mb-20 md:mb-40 text-left md:text-center background-best-solutions row rounded-2xl ">
      <div className="background-img-best-solutions md:px-11 md:py-14 px-5 py-11">
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
            className="w-full md:w-auto  text-white  p-4 md:py-5 md:px-9 rounded-xl text-lg md:text-xl bg-accent_background"
            // onClick={onClick}
          >
            <div
              className="text-lg md:text-xl"
              style={{
                caretColor: "white",
                whiteSpace: "nowrap",
              }}
            >
              Подобрать решение
            </div>
          </button>
        </div>
        <h3 className="text-center text-gray_font text-lg md:text-xl">
          Закажите индивидуальное решение и наш менеджер свяжется с вами в
          ближайшее время
        </h3>
      </div>
    </div>
  );
};
