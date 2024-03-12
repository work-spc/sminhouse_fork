import "./style.css";

import InputBestSolution from "../../components/best-solution-input/best-solution-input";
import { Button } from "../../components/button/button";
import { OurPartnersItems } from "../../components/our-partners-items/our-partners-items";
import { WhiteInput } from "../../components/white-input/white-input";
import first from "../../icons/our-partners/first.svg";
import third from "../../icons/our-partners/third.svg";
import second from "../../icons/our-partners/second.svg";
import sixth from "../../icons/our-partners/sixth.svg";

import first_mobile from "../../icons/our-partners/mobile/first.svg";
import second_mobile from "../../icons/our-partners/mobile/second.svg";
import third_mobile from "../../icons/our-partners/mobile/third.svg";
import fourth_mobile from "../../icons/our-partners/mobile/fourth.svg";
import fifth_mobile from "../../icons/our-partners/mobile/fifth.svg";
import sixth_mobile from "../../icons/our-partners/mobile/sixth.svg";

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
          <WhiteInput type="text" placeholder="Имя*"></WhiteInput>
          <WhiteInput type="mail" placeholder="E-mail*"></WhiteInput>
          <WhiteInput type="tel" placeholder="(___) ___-__-__"></WhiteInput>
          <Button children="Стать партнером" />
        </div>
        <p className="block  text-center text-gray_font text-sm md:text-lg">
          Продолжив, вы соглашаетесь с политикой конфиденциальности ООО
          “ИНТЕГРОСИСТЕМС”
        </p>
      </div>
    </div>
  );
};
