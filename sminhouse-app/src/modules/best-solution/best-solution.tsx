import "./style.css";
import background from "../../icons/best-solution/background.png";
import InputBestSolution from "../../components/best-solution-input/best-solution-input";

export const BestSolution: React.FC = () => {
  return (
    <div className="m-auto mb-20 md:mb-40 text-center background-best-solutions row rounded-2xl ">
      <div className="background-img-best-solutions px-11 py-14">
        <h2 className="md:text-center text-white md:text-5xl text-3xl font-bold mb-2 md:mb-3">
          Подберем лучшее решение для вас
        </h2>
        <h3 className="text-white text-xl mb-9">
          Закажите индивидуальное решение и наш менеджер свяжется с вами в
          ближайшее время
        </h3>
        <div className="flex gap-6">
          <InputBestSolution type="text" placeholder="Имя*"></InputBestSolution>
          <InputBestSolution
            type="mail"
            placeholder="E-mail*"
          ></InputBestSolution>
          <InputBestSolution
            type="numder"
            placeholder="+7 (___) ___-__-__"
          ></InputBestSolution>
        </div>
      </div>
    </div>
  );
};
