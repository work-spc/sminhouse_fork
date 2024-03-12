import { Accordion } from "../../components/accordion/accordion";
import "./style.css";

export const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mb-20 md:mb-40">
      <h2 className="md:text-5xl text-3xl font-bold mb-6 md:mb-3">
        Часто задаваемые вопросы
      </h2>

      <Accordion></Accordion>
    </div>
  );
};
